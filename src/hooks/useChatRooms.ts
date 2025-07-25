import { useQuery } from '@tanstack/react-query';
import { getChatRooms } from '../apis/chatApi';
import type { ChatRoomDetailResponse } from '../types/chat';

export const useChatRooms = () => {
  return useQuery<ChatRoomDetailResponse[]>({
    queryKey: ['chatRooms'],
    queryFn: async () => {
      const response = await getChatRooms();
      return response.data;
    },
  });
};
