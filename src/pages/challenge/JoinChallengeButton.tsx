// src/components/JoinChallengeButton.tsx
import React from 'react';

interface JoinChallengeButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
}

const JoinChallengeButton: React.FC<JoinChallengeButtonProps> = ({
  onClick,
  disabled = false,
  label = '챌린지에 참여해주세요!',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`border-main-600 text-main-600 fixed bottom-[80px] left-1/2 w-[calc(100%-32px)] -translate-x-1/2 rounded-xl border-2 border-dashed bg-white py-4 text-center font-semibold disabled:cursor-not-allowed disabled:opacity-50`}
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 16px)' }}
    >
      {label}
    </button>
  );
};

export default JoinChallengeButton;
