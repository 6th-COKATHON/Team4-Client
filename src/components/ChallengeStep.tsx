import { Check, Lock } from 'lucide-react';

interface Step {
  title: string;
  done?: boolean;
  locked?: boolean;
}

interface ChallengeStepProps {
  missionTitle: string;
  missionSubtitle: string;
  steps: Step[];
  nextMissionTitle?: string;
  onRegister?: () => void;
}

export default function ChallengeStep({
  missionTitle,
  missionSubtitle,
  steps,
  nextMissionTitle,
  onRegister,
}: ChallengeStepProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[393px] flex-col bg-[#fff] px-4 pt-4 pb-8">
      {/* 탭 메뉴 */}
      <div className="mb-4 flex gap-4 border-b">
        <button className="border-b-2 border-green-700 pb-2 font-bold text-green-700">
          챌린지 참여하기
        </button>
        <button className="pb-2 font-bold text-gray-400">완료된 챌린지</button>
      </div>
      {/* 미션 카드 */}
      <div className="relative mb-2 flex items-center rounded-xl bg-green-700 p-4 text-white">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-white font-bold text-black">
          썸네일
        </div>
        <div className="flex-1">
          <div className="text-xs">MISSION 1주차</div>
          <div className="text-lg leading-tight font-bold">{missionTitle}</div>
          <div className="text-sm">{missionSubtitle}</div>
        </div>
        <Lock className="absolute top-2 left-2 h-5 w-5 text-white/80" />
      </div>
      {/* 스텝 리스트 */}
      <div className="mb-4 flex flex-col gap-2">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`relative flex items-center rounded-xl px-4 py-3 text-sm font-medium ${
              step.locked
                ? 'bg-green-100 text-green-400'
                : step.done
                  ? 'bg-green-500 text-white'
                  : 'bg-green-300 text-white'
            }`}
          >
            {step.title}
            {step.done && <Check className="ml-auto text-white" size={20} />}
            {step.locked && (
              <Lock className="ml-auto text-green-400" size={20} />
            )}
          </div>
        ))}
      </div>
      {/* 다음 미션 안내 */}
      <div className="mb-8 flex items-center rounded-xl bg-gray-100 p-4 text-gray-400">
        <Lock className="mr-2" size={20} />
        <div>
          <div className="font-bold">{nextMissionTitle || 'MISSION 2'}</div>
          <div className="text-xs">MISSION1을 완료해주세요</div>
        </div>
      </div>
      {/* 등록 버튼 */}
      <button
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl border border-green-500 py-3 text-lg font-bold text-green-500 transition hover:bg-green-50"
        onClick={onRegister}
      >
        <span className="text-2xl">+</span> 챌린지 등록하기
      </button>
    </div>
  );
}
