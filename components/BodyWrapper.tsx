"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export default function BodyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const bodyClass = `font-sans antialiased overflow-x-hidden ${
    isHome ? "homepage" : ""
  }`;

  return (
    <body className={bodyClass}>
      <Header />
      {children}
      <Footer />
    </body>
  );
}
