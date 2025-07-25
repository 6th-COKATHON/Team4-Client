// src/components/ChallengeCard.tsx
import React from 'react';
import challengeProgressCircle from '@/assets/icons/challenge-progress-circle.svg';
import challengeProgressCircleLocked from '@/assets/icons/challenge-progress-circle-locked.svg';

interface ChallengeCardProps {
  isFirst?: boolean;
  isLast?: boolean;
  isMain?: boolean;
  isDone?: boolean; // 완료
  isCurrent?: boolean; // 현재 진행중
  isLocked?: boolean; // 잠김
  children: React.ReactNode;
}

const MAIN = 'bg-main-600';
const GRAY = 'bg-gray-300';

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  isFirst = false,
  isLast = false,
  isDone = false,
  isCurrent = false,
  isLocked = false,
  children,
}) => {
  // 선 색상 결정
  const getTopColor = () => {
    if (isFirst) return ''; // 윗선 없음
    if (isCurrent) return MAIN; // 현재 카드 위쪽은 이미 진행됨
    if (isLocked) return GRAY;
    if (isDone) return MAIN;
    return GRAY;
  };

  const getBottomColor = () => {
    if (isLast) return ''; // 아랫선 없음
    if (isCurrent) return GRAY; // 현재 카드 아래쪽은 앞으로 진행될 영역
    if (isLocked) return GRAY;
    if (isDone) return MAIN;
    return GRAY;
  };

  const renderCircle = () => (
    <img
      src={isLocked ? challengeProgressCircleLocked : challengeProgressCircle}
      className="relative z-10 h-full w-full"
      alt=""
    />
  );

  return (
    <div className="flex w-full items-stretch gap-5">
      {/* 타임라인(세로선 + 원) */}
      <div className="relative w-[2px] flex-shrink-0 self-stretch">
        {/* 윗 선 */}
        {!isFirst && (
          <span
            className={`absolute top-0 left-1/2 w-[2px] -translate-x-1/2 ${getTopColor()}`}
            style={{ height: '50%' }}
          />
        )}

        {/* 아랫 선 */}
        {!isLast && (
          <span
            className={`absolute bottom-0 left-1/2 w-[2px] -translate-x-1/2 ${getBottomColor()}`}
            style={{ height: '50%' }}
          />
        )}

        {/* 원 아이콘 */}
        <div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2">
          {renderCircle()}
        </div>
      </div>

      {/* 카드 본문 */}
      {children}
    </div>
  );
};

export default ChallengeCard;
