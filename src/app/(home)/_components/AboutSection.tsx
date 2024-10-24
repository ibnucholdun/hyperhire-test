import React from "react";

const levelVideo: { name: string; speed: string }[] = [
  {
    name: "FAST",
    speed: "x2",
  },
  {
    name: "QAULITY",
    speed: "A++",
  },
  {
    name: "LOW PRICE",
    speed: "1/2",
  },
  {
    name: "HIGH TECH",
    speed: "Gen AI",
  },
];
const AboutSection = () => {
  return (
    <section className="md:my-24 flex flex-col items-center justify-center md:w-11/12 mx-auto px-8">
      <h2 className="text-2xl font-bold text-gradient md:bg-gradient-to-r md:from-gradient-start md:to-gradient-end hidden md:inline-block mb-8">
        영상 제작소
      </h2>
      <h1 className="md:text-5xl text-2xl font-normal md:font-extralight text-center">
        당장 내일 <br className="md:hidden" />
        <span className="font-bold ">‘고품질 맞춤 영상’</span>을 받아보세요.
      </h1>
      <div className="flex gap-x-[1px] my-20">
        {levelVideo.map((item) => (
          <div
            className="md:h-[211px] md:w-[211px] h-[85px] w-[85px] rounded-full bg-gradient-to-r from-gradient-start to-gradient-end p-[0.8px]"
            key={item.name}
          >
            <div className="flex h-full w-full items-center justify-center bg-black back rounded-full">
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold md:text-3xl text-base text-gradient from-gradient-start to-gradient-end text-center">
                  {item.name}
                </p>
                <p className="hidden md:inline-block font-medium md:text-2xl bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                  {item.speed}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-base md:text-3xl font-bold">
        AI VIDEO ON YOUR DEMAND
      </h2>
      <p className="text-base font-normal md:text-xl md:font-bold text-slate-500 mt-8 text-center   ">
        가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에
        <br />
        영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을
        만듭니다.
      </p>
      <p className="text-xl font-bold text-slate-500 mt-8 text-center   ">
        가격은 절반으로, 속도는 두배로, 품질은 A++! <br />
        기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등 <br />
        당신이 필요한 &apos;그 영상&apos;을 플루닛 영상제작소에 맡겨주세요.
      </p>
      <div className="relative w-full flex justify-center my-20">
        <hr className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent border-0" />
      </div>
    </section>
  );
};

export default AboutSection;
