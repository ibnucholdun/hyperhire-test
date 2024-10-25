import Image from "next/image";
import React from "react";

const imageData: { name: string; src: string }[] = [
  {
    name: "Image work 1",
    src: "/images/work1.png",
  },
  {
    name: "Image work 2",
    src: "/images/work2.png",
  },
  {
    name: "Image work 3",
    src: "/images/work3.png",
  },
  {
    name: "Image work 4",
    src: "/images/work4.png",
  },
  {
    name: "Image work 5",
    src: "/images/work5.png",
  },
  {
    name: "Image work 6",
    src: "/images/work6.png",
  },
  {
    name: "Image work 7",
    src: "/images/work7.png",
  },
  {
    name: "Image work 8",
    src: "/images/work8.png",
  },
  {
    name: "Image work 9",
    src: "/images/work9.png",
  },
  {
    name: "Image work 10",
    src: "/images/work10.png",
  },
  {
    name: "Image work 11",
    src: "/images/work11.png",
  },
  {
    name: "Image work 12",
    src: "/images/work12.png",
  },
];
const PreviousWorksSection = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="relative inline-block">
          <h1 className="text-xl md:text-5xl font-bold">PREVIOUS WORKS</h1>
          <span className="absolute top-[-15px] left-[-15px] w-4 h-4 bg-gradient-to-br from-gradient-start to-gradient-end rounded-full"></span>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        {imageData.map((item) => (
          <div
            className="w-1/2 h-[180px] md:w-1/4 md:h-[270px]"
            key={item.name}
          >
            <Image
              src={item.src}
              alt={item.name}
              width={1000}
              height={500}
              className="h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousWorksSection;
