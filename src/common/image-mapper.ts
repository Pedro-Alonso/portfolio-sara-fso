import LogoSara from "@/assets/images/logo-sara.png";
import LogoSaraBig from "@/assets/images/logo-sara-big.png";
import PortraitSara01 from "@/assets/images/portrait1.png";
import PortraitSara02 from "@/assets/images/portrait2.png";
import { StaticImageData } from "next/image";

type ImageType = {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
};

const FONT_SIZE =
  typeof window !== "undefined"
    ? parseFloat(getComputedStyle(document.documentElement).fontSize)
    : 16;

const FIFTY_PERCENT_WIDTH =
  typeof window !== "undefined"
    ? parseFloat(
        getComputedStyle(document.documentElement).width.replace("px", "")
      ) / 2
    : 0;

export const imageMapper: Record<string, ImageType> = {
  LogoSara: {
    src: LogoSara,
    alt: "Logo Dra. Sara Oliveira - Advogada previdenciária",
    width: undefined,
    height: 5 * FONT_SIZE,
  },
  LogoSaraBig: {
    src: LogoSaraBig,
    alt: "Logo Dra. Sara Oliveira - Advogada previdenciária",
    width: 400,
    height: 200,
  },
  PortraitSara01: {
    src: PortraitSara01,
    alt: "Dra. Sara Oliveira - Advogada previdenciária",
    width: FIFTY_PERCENT_WIDTH,
    height: 600,
  },
  PortraitSara02: {
    src: PortraitSara02,
    alt: "Dra. Sara Oliveira - Advogada previdenciária",
    width: 400,
    height: 600,
  },
};
