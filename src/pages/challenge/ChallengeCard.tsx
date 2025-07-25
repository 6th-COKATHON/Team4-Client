// src/components/ChallengeCard.tsx
import React from 'react';
import challengeProgressCircle from '@/assets/icons/challenge-progress-circle.svg';
import challengeProgressCircleMain from '@/assets/icons/challenge-progress-circle-main.svg';

interface ChallengeCardProps {
  isFirst?: boolean;
  isLast?: boolean;
  isMain?: boolean;
  children: React.ReactNode;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  isFirst = false,
  isLast = false,
  isMain = false,
  children,
}) => {
  // 선의 높이와 정렬(self‑*)을 결정
  const progressStyle = () => {
    const base = 'w-1 bg-main-600 relative';
    if (isFirst) {
      // 첫 노드는 아래 반만, 아래에 붙임
      return `${base} h-1/2 self-end`;
    }
    if (isLast) {
      // 마지막 노드는 위 반만, 위에 붙임
      return `${base} h-1/2 self-start`;
    }
    // 중간 노드는 전체 높이, stretch
    return `${base} h-full self-stretch`;
  };

  // circle 아이콘의 위치 결정
  const challengeProgressCircleStyle = () => {
    const pos = 'absolute left-1/2 -translate-x-1/2';
    if (isFirst) {
      return `${pos} top-0`;
    }
    if (isLast) {
      return `${pos} bottom-0`;
    }
    return `${pos} top-1/2 -translate-y-1/2`;
  };

  // 메인(circle main) vs 서브(circle) 결정
  const renderChallengeProgressCircle = () =>
    isMain ? (
      <img
        src={challengeProgressCircleMain}
        className={challengeProgressCircleStyle()}
      />
    ) : (
      <img
        src={challengeProgressCircle}
        className={challengeProgressCircleStyle()}
      />
    );

  return (
    <div className="flex h-28 w-full items-center gap-5">
      {/* 선 + circle 컨테이너 */}
      <div className={progressStyle()}>{renderChallengeProgressCircle()}</div>
      {/* 카드 본문 */}
      {children}
    </div>
  );
};

export default ChallengeCard;
