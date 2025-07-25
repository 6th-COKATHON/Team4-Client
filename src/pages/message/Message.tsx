// src/pages/Message.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useChatRooms } from '../../hooks/useChatRooms';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import anonymousImg from '../../assets/images/anonymous.png';

const Message: React.FC = () => {
  const { data: chatRooms, isLoading, error } = useChatRooms();

  if (isLoading) return <div className="p-4">로딩 중...</div>;
  if (error) return <div className="p-4">에러가 발생했습니다</div>;

  return (
    <div className="flex h-screen flex-col bg-white">
      {/* 헤더 */}
      <Header isPrevButton={false} title="익명의 소리" />

      {/* 채팅방 리스트 */}
      <div className="flex-1 overflow-y-auto">
        {chatRooms?.map(room => {
          const preview =
            room.lastChat?.chatContent ??
            room.chatRoomDescription ??
            '마지막 채팅 미리보기';

          return (
            <Link
              key={room.chatRoomId}
              to={`/message/${room.chatRoomId}`}
              className="flex items-center justify-between border-b border-gray-200 px-4 py-3 hover:bg-gray-50"
            >
              {/* 왼쪽: 아바타 + 텍스트 */}
              <div className="flex items-center gap-3">
                <img
                  src={anonymousImg}
                  alt="익명 프로필"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium text-gray-900">
                    {room.chatRoomName}
                  </span>
                  <span className="text-sm text-gray-500">{preview}</span>
                </div>
              </div>

              {/* 오른쪽: 날짜 */}
              <span className="text-sm text-gray-400"> </span>
            </Link>
          );
        })}
      </div>

      {/* 네비게이션 */}
      <Navbar />
    </div>
  );
};

export default Message;
