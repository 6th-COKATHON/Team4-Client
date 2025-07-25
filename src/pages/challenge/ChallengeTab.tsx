import React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../../components/ui/tabs';
import ChallengeOngoing from './ChallengeOngoing';
import ChallengeCompleted from './ChallengeCompleted';

interface TriggerProps {
  value: string;
  children: React.ReactNode;
}

const StyledTabsTrigger: React.FC<TriggerProps> = ({ value, children }) => (
  <TabsTrigger
    value={value}
    className={`/* 기본 스타일 */ /* 모서리 없애기 */ /* active 시에도 배경·그림자·모서리 제거 */ /* active 텍스트 & 밑줄 */ data-[state=active]:text-main-600 data-[state=active]:border-main-600 rounded-none border-0 bg-transparent px-2 pb-2 text-gray-300 shadow-none focus:outline-none data-[state=active]:rounded-none data-[state=active]:border-b-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none`}
  >
    {children}
  </TabsTrigger>
);

const ChallengeTab: React.FC = () => (
  <Tabs
    defaultValue="ongoing"
    className="w-full rounded-none bg-transparent shadow-none"
  >
    <TabsList className="flex space-x-6 rounded-none border-none bg-transparent shadow-none">
      <StyledTabsTrigger value="ongoing">챌린지 참여하기</StyledTabsTrigger>
      <StyledTabsTrigger value="completed">완료된 챌린지</StyledTabsTrigger>
    </TabsList>

    <TabsContent value="ongoing">
      <ChallengeOngoing />
    </TabsContent>
    <TabsContent value="completed">
      <ChallengeCompleted />
    </TabsContent>
  </Tabs>
);

export default ChallengeTab;
