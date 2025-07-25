// src/components/ChallengeMainCard.tsx
import React from 'react';
import { ChevronDown, Lock, Check } from 'lucide-react';
import ChallengeCard from './ChallengeCard';

interface ChallengeMainCardProps {
  isFirst?: boolean;
  isLast?: boolean;
  isLocked?: boolean;
  isDone?: boolean;
  isCurrent?: boolean;
  title: string;
  // thumbSrc?: string; // 썸네일이 필요하다면 추가
}

const ChallengeMainCard: React.FC<ChallengeMainCardProps> = ({
  isFirst,
  isLast,
  isLocked = false,
  isDone = false,
  isCurrent,
  title,
}) => {
  const cardBg = isLocked ? 'bg-gray-200' : 'bg-main-600';
  const textColor = isLocked ? 'text-gray-700' : 'text-black';
  const Icon = isLocked ? Lock : ChevronDown;

  return (
    <ChallengeCard
      isFirst={isFirst}
      isLast={isLast}
      isDone={isDone}
      isCurrent={isCurrent}
      isLocked={isLocked}
    >
      <div className="w-full py-3">
        <div
          className={`${cardBg} relative flex w-full items-center justify-between rounded-xl px-4 py-9`}
        >
          {/* 본문 (isDone이면 뒤로 숨겨둘 뿐 그대로 렌더링 가능) */}
          <span className={`font-bold ${textColor}`} aria-hidden={isDone}>
            {title}
          </span>
          {!isDone && <Icon className="h-5 w-5 text-white" />}

          {/* ✅ 완료 오버레이 */}
          {isDone && (
            <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black/50">
              <Check className="h-7 w-7 text-white" />
            </div>
          )}
        </div>
      </div>
    </ChallengeCard>
  );
};

export default ChallengeMainCard;
