import api from './api';
import type { ChatRoomListResponse } from '../types/chat';

export const getChatRooms = async (): Promise<ChatRoomListResponse> => {
  const { data } = await api.get<ChatRoomListResponse>('/api/v1/chatRooms');
  return data;
};
