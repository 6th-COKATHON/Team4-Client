// src/pages/MessageRoom.tsx

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useChats } from '../../hooks/useChats';
import Header from '../../components/Header';
import { Send } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import api from '../../apis/api';

interface Message {
  id: number;
  author: string;
  content: string;
}

const MessageRoom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const chatRoomId = Number(id);
  const username = 'qwer';
  // const queryClient = useQueryClient();

  // 1) 서버에서 채팅 목록 불러오기
  const {
    data: chatsRes,
    isLoading: chatsLoading,
    error: chatsError,
  } = useChats(chatRoomId);

  // 2) 로컬 메시지 상태
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  // 3) API 데이터가 로드되면 로컬 state 에 매핑
  useEffect(() => {
    if (chatsRes) {
      setMessages(
        chatsRes.data.map(chat => ({
          id: chat.chatId,
          author: chat.senderName,
          content: chat.chatContent,
        })),
      );
    }
  }, [chatsRes]);

  // 4) 메시지 전송용 mutation (PUT 요청)
  const { mutate: putChat, isPending: isPosting } = useMutation({
    mutationFn: message => {
      return api.post(`/api/v1/chatRooms/${chatRoomId}/chats`, {
        message,
      });
    },
    onSuccess: () => {
      // 전송 성공 시 다시 불러오기
      // queryClient.invalidateQueries({ queryKey: ['chats', chatRoomId] });
    },
  });

  // 5) 입력값 전송 핸들러 (낙관적 업데이트 포함)
  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    // 낙관적 UI 업데이트
    const nextId =
      messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
    const newMsg: Message = {
      id: nextId,
      author: username,
      content: text,
    };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // 서버에 PUT 요청
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    putChat(text as any);
  };

  // 6) 메시지 추가될 때마다 스크롤 최하단으로
  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  if (chatsLoading) return <div className="p-4">로딩 중...</div>;
  if (chatsError) return <div className="p-4">메시지 로드 실패</div>;

  // API에서 받아온 채팅방 이름
  const chatRoomName = chatsRes?.data[0]?.chatRoomName ?? `톡방 ${chatRoomId}`;

  return (
    <div className="flex h-screen flex-col bg-white">
      {/* 헤더: API 채팅방 이름 */}
      <Header isPrevButton title={chatRoomName} />

      {/* 메시지 리스트 */}
      <div
        ref={listRef}
        className="flex-1 space-y-4 overflow-y-auto bg-white px-4 py-3"
      >
        {messages.map(({ id, author, content }) => {
          const isMine = author === username;
          return (
            <div key={id} className="flex flex-col">
              <div
                className={`max-w-[70%] whitespace-pre-wrap ${
                  isMine
                    ? 'bg-main-600 self-end rounded-tl-xl rounded-tr-xl rounded-bl-xl px-4 py-2 text-white'
                    : 'self-start rounded-tl-xl rounded-tr-xl rounded-br-xl bg-gray-100 px-4 py-2 text-gray-800'
                }`}
              >
                {content}
              </div>
            </div>
          );
        })}
      </div>

      {/* 입력창 */}
      <div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="메시지를 입력해주세요"
            className="focus:ring-main-600 h-12 w-full rounded-xl border border-gray-200 bg-gray-100 pr-12 text-gray-500 placeholder-gray-400 focus:ring-2 focus:outline-none"
          />
          <button
            onClick={sendMessage}
            disabled={isPosting}
            className="absolute top-1/2 right-3 -translate-y-1/2"
          >
            <Send className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageRoom;
