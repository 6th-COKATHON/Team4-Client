// src/pages/Home.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Navbar from '../../components/Navbar';
import hangbok from '../../assets/images/hangbok.png';
import jjinggci from '../../assets/images/jjinggci.png';
import rani from '../../assets/images/rani.png';
import jechogi from '../../assets/images/jechogi.png';
import mangu from '../../assets/images/mangu.png';

type CalendarItem = {
  day: string;
  date: number;
  status: 'completed' | 'upcoming' | 'selected';
};

const calendarItems: CalendarItem[] = [
  { day: 'Tue', date: 22, status: 'completed' },
  { day: 'Wed', date: 23, status: 'completed' },
  { day: 'Thu', date: 24, status: 'upcoming' },
  { day: 'Fri', date: 25, status: 'completed' },
  { day: 'Sat', date: 26, status: 'selected' },
  { day: 'Sun', date: 27, status: 'upcoming' },
  { day: 'Mon', date: 28, status: 'upcoming' },
  { day: 'Tue', date: 29, status: 'upcoming' },
];

const messages: Record<number, string> = {
  100: '함께 만든 당신 덕분에 더 빛나요!',
  80: '거의 다 왔어요! 잠시 힘내고 가볼까요?',
  60: '나머지는 함께 채워볼래요, 우리의 행복을 위해!',
  40: '함께 시작해봐요!',
  20: '시작이 반이래요 :) 첫 걸음 달성!',
};

const illustrations: Record<number, string> = {
  100: hangbok,
  80: jjinggci,
  60: rani,
  40: jechogi,
  20: mangu,
};

const Home: React.FC = () => {
  const { percentage } = useParams();
  const pct = Number(percentage) || 0;
  const message = messages[pct] ?? '오늘도 힘찬 하루 보내세요!';

  return (
    <div className="flex h-screen flex-col bg-[#F8F8EB]">
      {/* ─── Header & Calendar ─── */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Group 4조가짱</h2>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </div>
        <div className="mt-4 flex space-x-4 overflow-x-auto">
          {calendarItems.map(({ day, date, status }) => {
            const isSelected = status === 'selected';
            const isCompleted = status === 'completed';
            return (
              <div key={date} className="flex flex-col items-center">
                <span
                  className={`text-sm ${
                    isSelected
                      ? 'text-black'
                      : isCompleted
                        ? 'text-main-600'
                        : 'text-gray-400'
                  }`}
                >
                  {day}
                </span>
                <div
                  className={`mt-1 flex h-8 w-8 items-center justify-center text-sm font-medium ${
                    isSelected
                      ? 'rounded-full bg-gray-800 text-white'
                      : isCompleted
                        ? 'bg-main-200 text-main-600 rounded-full'
                        : 'text-gray-400'
                  } `}
                >
                  {date}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-4">
        <h1 className="z-1 mb-[-68px] text-6xl font-bold">{pct}%</h1>
        <div className="z-0 flex h-64 w-64 items-center justify-center rounded-lg">
          <img
            src={illustrations[pct]}
            alt="illustration"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E7EBCE] px-10 py-5">
          <span className="text-lg text-gray-700">{message}</span>
        </div>
      </div>

      {/* ─── Bottom Navigation ─── */}
      <Navbar />
    </div>
  );
};

export default Home;
