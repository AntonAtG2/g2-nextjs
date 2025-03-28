import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import BodyWrapper from "@/components/BodyWrapper";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trusted Home Partner | Spotted Owl",
  description:
    "Rapid emergency response, expert renovations, and long-term home maintenance from your trusted partner in Stellenbosch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans antialiased overflow-x-hidden">
        <BodyWrapper>{children}</BodyWrapper>
      </body>
    </html>
  );
}
