export interface ChatDetailResponse {
  chatId: number;
  chatContent: string;
  senderName: string;
  chatRoomName: string;
}

export interface ChatRoomDetailResponse {
  chatRoomId: number;
  chatRoomName: string;
  chatRoomDescription: string;
  lastChat: ChatDetailResponse;
}

export interface DataResponse<T> {
  status: string;
  timestamp: string;
  data: T;
}

export type ChatRoomListResponse = DataResponse<ChatRoomDetailResponse[]>;
