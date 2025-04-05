import Image from "next/image";
import { NavLinkItem } from "./header.types";
import { imageMapper } from "@/common/image-mapper";
import Link from "next/link";

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
          <Link href={link.href}>{link.label}</Link>
        </li>
      );
    });
  };

  const renderNavBar = () => {
    return (
      <nav>
        <ul className="flex flex-row justify-between items-center bg-transparent p-4 gap-8 palette-primary-dark dark:palette-primary-lightest">
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
      />
      <h3 className="text-2xl font-bold palette-neutral-darkest dark:palette-neutral-lightest">
        Seja muito bem-vindo!
      </h3>
      {renderNavBar()}
    </div>
  );
};
