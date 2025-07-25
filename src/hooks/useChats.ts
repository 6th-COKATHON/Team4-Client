// src/hooks/useChats.ts

import { useQuery } from '@tanstack/react-query';
import api from '../apis/api';

export interface Chat {
  chatId: number;
  chatContent: string;
  senderName: string;
  chatRoomName: string;
}

export interface ChatsResponse {
  status: string;
  timestamp: string;
  data: Chat[];
}

export const useChats = (chatRoomId: number) => {
  return useQuery<ChatsResponse>({
    queryKey: ['chats', chatRoomId],
    queryFn: () =>
      api
        .get<ChatsResponse>(`/api/v1/chatRooms/${chatRoomId}/chats`)
        .then(res => res.data),
  });
};
