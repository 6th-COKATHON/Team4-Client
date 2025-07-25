// src/components/ChallengeSubCard.tsx
import React from 'react';
import ChallengeCard from './ChallengeCard';
import { Check, Lock } from 'lucide-react';

interface ChallengeSubCardProps {
  /** 위 차례의 연결 라인을 그릴 때 첫 노드(위만) */
  isFirst?: boolean;
  /** 아래 차례의 연결 라인을 그릴 때 마지막 노드(아래만) */
  isLast?: boolean;
  /** 이미 완료된(체크 표시) 카드 */
  isBefore?: boolean;
  /** 현재 활성 카드 */
  isCurrent?: boolean;
  /** 다음 단계(잠금 전) 카드 */
  isAfter?: boolean;
  /** 완전 잠금 카드(회색) */
  isLocked?: boolean;
  isDone?: boolean;
  title: string;
}

const ChallengeSubCard: React.FC<ChallengeSubCardProps> = ({
  isFirst = false,
  isLast = false,
  isBefore = false,
  isCurrent = false,
  isAfter = false,
  isLocked = false,
  isDone = false,
  title,
}) => {
  // ─── 카드 스타일 분기 ───
  const baseClass = 'w-full rounded-xl px-4 py-4 flex items-center';
  let cardClass = baseClass;
  let textClass = '';
  let icon: React.ReactNode = null;

  if (isBefore) {
    cardClass += ' justify-between bg-main-600';
    textClass = 'text-white text-16-medium';
    icon = <Check className="h-5 w-5 text-white" />;
  } else if (isCurrent) {
    cardClass += ' justify-between bg-main-500';
    textClass = 'text-white text-16-medium';
  } else if (isAfter) {
    cardClass += ' justify-between bg-main-300';
    textClass = 'text-white text-16-medium';
    icon = <Lock className="h-5 w-5 text-white" />;
  } else if (isLocked) {
    cardClass += ' justify-center bg-gray-100';
    icon = <Lock className="h-6 w-6 text-gray-400" />;
  }

  return (
    <ChallengeCard
      isFirst={isFirst}
      isLast={isLast}
      isDone={isDone}
      isCurrent={isCurrent}
      isLocked={isLocked}
    >
      <div className="w-full py-2">
        <div className={cardClass}>
          {/* 텍스트 (잠금 카드가 아니면) */}
          {<span className={textClass}>{title}</span>}
          {/* 상태별 아이콘 */}
          {icon}
        </div>
      </div>
    </ChallengeCard>
  );
};

export default ChallengeSubCard;
