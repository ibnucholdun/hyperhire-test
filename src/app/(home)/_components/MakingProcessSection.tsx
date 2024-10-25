import { FileVideo, TvMinimalPlay, Video } from "lucide-react";
import React from "react";

const steps = [
  {
    name: "STEP1",
    caption: "사전 논의",
    description:
      "영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의",
  },
  {
    name: "STEP2",
    caption: "영상 기획",
    description:
      "스토리보드 전달&수정을 통한 기획안 확정 가상인간 발화용 스크립트 작성과 프롬프팅",
  },
  {
    name: "STEP3",
    caption: "영상 생성 ",
    description:
      "작성한 스크립트로 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성",
  },
  {
    name: "STEP4",
    caption: "영상 편집",
    description:
      "영상 전문가의 편집, 디자인, 후반 작업 단계 필요시 실사 촬영 병행하여 편집본 완성",
  },
  {
    name: "STEP5",
    caption: "최종 납품 ",
    description:
      "고객 피드백 반영하여 최종본 완성 및 납품 * 영상 수정 무료 1회 제공",
  },
];

const quickserve = [
  {
    step: "STEP1",
    name: "제작 안내",
    icon: <FileVideo className="w-[25px] md:w-[40px] h-[25px] md:h-[40px]" />,
    description: "영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내",
  },
  {
    step: "STEP2",
    name: "영상 생성",
    icon: <Video className="w-[25px] md:w-[40px] h-[25px] md:h-[40px]" />,
    description:
      "스크립트 수신 즉시 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성",
  },
  {
    step: "STEP3",
    name: "편집 및 납품",
    icon: (
      <TvMinimalPlay className="w-[25px] md:w-[40px] h-[25px] md:h-[40px]" />
    ),
    description: "편집 진행, 12~48시간 내 최종본 완성 및 납품",
  },
];

const MakingProcessSection = () => {
  return (
    <section className="my-36">
      <div className="flex flex-col items-center justify-center md:mb-12 mb-6">
        <div className="relative inline-block">
          <h1 className="text-xl md:text-5xl font-bold">MAKING PROCESS</h1>
          <span className="absolute top-[-15px] left-[-15px] w-4 h-4 bg-gradient-to-br from-gradient-start to-gradient-end rounded-full"></span>
        </div>
      </div>
      <div className="md:w-4/5 mx-auto px-4">
        <div className="md:flex items-center justify-between gap-x-8">
          <div className="rounded-xl md:w-1/2 md:h-[820px] md:border-[1px] border-slate-500 md:rounded-3xl md:py-12 md:px-9 flex flex-col items-center mx-auto">
            <h2 className="text-[22px] md:text-4xl font-bold">일반 제작</h2>
            <h3 className="text-base md:text-xl font-normal opacity-80 mt-3">
              제작 시작 후 5영업일 이내
            </h3>
            <div className="flex flex-col gap-y-5 my-8">
              {steps.map((step, index) => (
                <div
                  className="relative px-5 py-5 gap-x-2 flex justify-between border-[1px] border-slate-500 md:rounded-full rounded-lg md:px-24 md:py-5 md:gap-x-5 "
                  key={step.name}
                >
                  <div className="flex flex-col w-1/4">
                    <h4 className="font-normal md:text-base text-xs bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                      {step.name}
                    </h4>
                    <h3 className="font-bold md:text-xl text-base">
                      {step.caption}
                    </h3>
                  </div>
                  <div className="w-3/4">
                    <p className="font-normal md:text-base text-sm text-slate-500">
                      {step.description}
                    </p>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-slate-500"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2 md:h-[820px] bg-gradient-to-r from-gradient-start to-gradient-end p-[0.8px] rounded-3xl">
            <div className="bg-black back rounded-3xl h-full md:p-12 p-4">
              <h2 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent text-center">
                Ploonet Quickserve™
              </h2>
              <p className="md:text-xl text-base font-bold text-center mt-2">
                제작 시작 후 12~48시간 이내
              </p>
              <div className="mt-12 md:mt-24 flex flex-col gap-y-5 md:gap-y-10">
                {quickserve.map((step) => (
                  <div
                    className="flex items-center gap-x-5 md:gap-x-10"
                    key={step.step}
                  >
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-lg blur opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-gradient-start to-gradient-end rounded-2xl p-5 flex flex-col items-center">
                        <p className="text-xs md:text-lg font-medium">
                          {step.step}
                        </p>
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-2 pb-3 md:w-4/5 ">
                      <h4 className="text-lg md:text-2xl font-bold">
                        {step.name}
                      </h4>
                      <p className="text-sm md:text-lg font-medium ">
                        {step.description}
                      </p>
                      <hr className="border-slate-500 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:mt-12 mt-6 px-4 gap-y-2">
        <p className="md:text-sm text-[10px] font-normal text-slate-500 text-center">
           * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며,  모션그래픽 등
          전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        </p>
        <p className="md:text-sm text-[10px] font-normal text-slate-500 text-center">
            ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수
          있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default MakingProcessSection;
