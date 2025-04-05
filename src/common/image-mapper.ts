import LogoSara from "@/assets/images/logo-sara.png";
import LogoSaraBig from "@/assets/images/logo-sara-big.png";
import PortraitSara01 from "@/assets/images/portrait1.jpg";
import PortraitSara02 from "@/assets/images/portrait2.jpg";
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
    width: 400,
    height: 600,
  },
  PortraitSara02: {
    src: PortraitSara02,
    alt: "Dra. Sara Oliveira - Advogada previdenciária",
    width: 400,
    height: 600,
  },
};
