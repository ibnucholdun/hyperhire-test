import { MoveDownLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-auto">
        <Image
          src="/images/hero-image.svg"
          alt="logo"
          layout="responsive"
          width={1000}
          height={934}
          className="object-cover object-center"
        />
        <div className="hidden md:absolute top-64 right-20 w-32 h-32 bg-gradient-to-tl from-gradient-start to-gradient-end/60 rounded-full opacity-80 md:flex flex-col items-center justify-center text-center">
          <span>
            제작 <br />
            문의하기
          </span>
          <MoveDownLeft className="mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
