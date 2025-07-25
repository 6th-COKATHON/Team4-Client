// src/components/ChallengeMainCard.tsx
import React from 'react';
import { ChevronDown, Lock } from 'lucide-react';
import ChallengeCard from './ChallengeCard';

interface ChallengeMainCardProps {
  isFirst?: boolean;
  isLast?: boolean;
  isLocked?: boolean;
}

const ChallengeMainCard: React.FC<ChallengeMainCardProps> = ({
  isFirst,
  isLast,
  isLocked = false,
}) => {
  // 카드 배경 & 텍스트 색 결정
  const cardBg = isLocked ? 'bg-gray-200' : 'bg-main-600';
  const textColor = isLocked ? 'text-gray-700' : 'text-black';
  // 아이콘 결정
  const Icon = isLocked ? Lock : ChevronDown;
  const iconColor = isLocked ? 'text-white' : 'text-white';

  return (
    <ChallengeCard isFirst={isFirst} isLast={isLast}>
      <div className="w-full py-3">
        <div
          className={` ${cardBg} flex w-full items-center justify-between rounded-xl px-4 py-9`}
        >
          {/* 좌측 텍스트 */}
          <span className={`font-bold ${textColor}`}>Challenge 1</span>

          {/* 우측 아이콘 (화살표 or 자물쇠) */}
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      </div>
    </ChallengeCard>
  );
};

export default ChallengeMainCard;
