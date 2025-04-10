import { imageMapper } from "@/common/image-mapper";
import Image from "next/image";

export const HeroSection = () => {
  const {
    src: portraitSrc,
    alt: portraitAlt,
    width: portraitWidth,
    height: portraitHeight,
  } = imageMapper.PortraitSara01;
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="w-3/12">
        <h1
          className="
            lg:text-7xl
            md:text-6xl
            sm:text-5xl
            font-bold
            leading-[1.2]
            text-gray-800
            dark:text-gray-200
        "
        >
          O QUE
          <br /> POSSO
          <br /> FAZER
          <br /> POR
          <br /> VOCÊ,
          <br /> HOJE?
        </h1>
      </div>
      <div className="flex justify-center items-center relative">
        <Image
          alt={portraitAlt}
          src={portraitSrc}
          width={portraitWidth}
          height={portraitHeight}
          className="relative z-10"
        />
        <div
          className="
            absolute top-0 left-0 h-full w-1/4
            bg-gradient-to-r
            from-background-light to-transparent
            dark:from-background-dark 
            z-20
            pointer-events-none
            translate-x-[-1%]
        "
        />
      </div>
    </div>
  );
};
