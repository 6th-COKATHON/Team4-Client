import Anonymous from '../../assets/images/anonymous.png';

const MessageBox = () => {
  return (
    <div className="border-color-gray-100 flex w-full items-center justify-center gap-4 border-b-1 px-1 py-[18px]">
      <img src={Anonymous} alt="anonymous" className="h-12 w-12" />
      <div className="flex flex-1 flex-col gap-2 py-1">
        <span className="text-14-bold">톡방 이름</span>
        <span className="text-12-medium text-gray-400">마지막 채팅</span>
      </div>
    </div>
  );
};

export default MessageBox;
