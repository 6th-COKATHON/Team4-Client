import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  isPrevButton?: boolean;
  title: string;
  onClickPrev?: () => void;
}

const Header = ({ title, isPrevButton = true, onClickPrev }: HeaderProps) => {
  return (
    <header className="relative flex w-full items-center justify-center py-[12px]">
      {isPrevButton && (
        <button
          className="absolute top-[50%] left-[14px] -translate-y-1/2"
          onClick={onClickPrev}
        >
          <ArrowLeft size={24} />
        </button>
      )}
      <h1 className="text-18-bold">{title}</h1>
    </header>
  );
};

export default Header;
