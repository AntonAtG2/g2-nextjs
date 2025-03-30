"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/header";

export default function BodyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      document.body.classList.add("homepage");
    } else {
      document.body.classList.remove("homepage");
    }
  }, [pathname]);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
