import React from 'react';
import ChallengeMainCard from './ChallengeMainCard';
import ChallengeSubCard from './ChallengeSubCard';

const ChallengeOngoing: React.FC = () => {
  return (
    <div className="flex flex-col pt-4">
      <ChallengeMainCard isFirst />
      <ChallengeSubCard isAfter title="Challenge 1" />
      <ChallengeSubCard isLast isBefore title="Challenge 1" />
    </div>
  );
};

export default ChallengeOngoing;
