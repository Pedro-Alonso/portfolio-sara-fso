"use client";

import Image from "next/image";
import { NavLinkItem } from "./header.types";
import { imageMapper } from "@/common/image-mapper";
import { ThemeSwitcher } from "../ThemeSwitcher/theme-switcher";
import { Button } from "../Button/button";

export const Header = () => {
  const {
    src: logoSrc,
    alt: logoAlt,
    width: logoWidth,
    height: logoHeight,
  } = imageMapper.LogoSara;
  const navLinks: NavLinkItem[] = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Contato", href: "/contato" },
  ];

  const renderNavBarLinks = () => {
    return navLinks.map((link) => {
      return (
        <li key={link.label}>
          <Button
            type="tertiary"
            size="medium"
            text={link.label}
            onClick={() => {}}
          />
        </li>
      );
    });
  };

  const renderNavBar = () => {
    return (
      <nav>
        <ul className="flex flex-row justify-between items-center bg-transparent p-4 gap-8">
          {renderNavBarLinks()}
        </ul>
      </nav>
    );
  };

  return (
    <div className="flex flex-row justify-between items-center bg-transparent p-4">
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={logoWidth}
        height={logoHeight}
        onClick={() => {}}
      />
      <h3 className="text-2xl font-bold text-neutral-darkest dark:text-neutral-lightest">
        Seja muito bem-vindo!
      </h3>
      <div className="flex items-center">
        {renderNavBar()}
        <ThemeSwitcher />
      </div>
    </div>
  );
};
