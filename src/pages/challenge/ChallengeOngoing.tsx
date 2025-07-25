// src/components/ChallengeOngoing.tsx
import React, { useMemo, useState } from 'react';
import ChallengeMainCard from './ChallengeMainCard';
import ChallengeSubCard from './ChallengeSubCard';
import JoinChallengeButton from './JoinChallengeButton';

type SubStatus = 'done' | 'current' | 'locked';
interface SubStep {
  id: number;
  title: string;
  status: SubStatus;
}

const ChallengeOngoing: React.FC = () => {
  const [subs, setSubs] = useState<SubStep[]>([
    { id: 1, title: '기분에 맞는 노래 추천', status: 'done' },
    { id: 2, title: '오늘 하루 한 문장으로 요약', status: 'current' },
    { id: 3, title: '마음에 맞는 문장 찾기', status: 'locked' },
    { id: 4, title: '나를 위한 행동 한가지', status: 'locked' },
  ]);

  const currentIdx = useMemo(
    () => subs.findIndex(s => s.status === 'current'),
    [subs],
  );

  const advance = () => {
    setSubs(prev => {
      const idx = prev.findIndex(s => s.status === 'current');
      if (idx === -1) return prev; // 이미 끝

      const next = prev.map((s, i) => {
        if (i === idx) return { ...s, status: 'done' as const };
        if (i === idx + 1 && s.status === 'locked')
          return { ...s, status: 'current' as const };
        return s;
      });

      const allDone = next.every(s => s.status === 'done');
      return allDone ? [] : next;
    });
  };

  const allSubsDone = subs.length === 0 || subs.every(s => s.status === 'done');

  const noMoreSteps =
    subs.length === 0 ||
    currentIdx === -1 ||
    (currentIdx === subs.length - 1 && subs[currentIdx].status === 'done');

  // 버튼 라벨
  const buttonLabel = noMoreSteps
    ? '모든 챌린지를 완료했어요!'
    : currentIdx !== -1
      ? '챌린지 진행하기'
      : '다음 단계 진행하기';

  return (
    <div className="relative flex flex-col pt-4 pb-[120px]">
      {/* Challenge 1: 서브 챌린지 완료 시 done */}
      <ChallengeMainCard
        isFirst
        title="Challenge 1"
        isDone={allSubsDone}
        isCurrent={!allSubsDone}
        isLocked={false}
      />

      {/* Sub Challenges */}
      {subs.map((s, i) => {
        const isDone = s.status === 'done';
        const isCurrent = s.status === 'current';
        const isLocked = s.status === 'locked';

        const before = currentIdx !== -1 ? i < currentIdx : false;
        const after = currentIdx !== -1 ? i > currentIdx : false;

        return (
          <ChallengeSubCard
            key={s.id}
            title={s.title}
            isBefore={before}
            isAfter={after}
            isDone={isDone}
            isCurrent={isCurrent}
            isLocked={isLocked}
          />
        );
      })}

      {/* Challenge 2: 모두 끝나면 locked 아님, done 처리 */}
      <ChallengeMainCard isLast title="Challenge 2" isLocked={!allSubsDone} />

      <JoinChallengeButton
        onClick={advance}
        disabled={noMoreSteps}
        label={buttonLabel}
      />
    </div>
  );
};

export default ChallengeOngoing;
