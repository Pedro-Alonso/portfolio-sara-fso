import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Sara Oliveira - Advogada previdenciária",
  description:
    "Advogada previdenciária com mais de meia década de experiência em Direito Previdenciário, atuando em todo o Brasil. Especialista em aposentadorias, pensões e benefícios do INSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
