/* eslint-disable camelcase */
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";

const roboto = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
  style: ["normal"],
});
// const inter = Inter({ subsets: ["latin"], variable: "--font-roboto" });
// const spaceGrotesk = Roboto({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-roboto",
// });
export const metadata: Metadata = {
  title: "Pet care",
  description: "Pet care",
  icons: { icon: "/assets/logo.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} `}>{children}</body>
    </html>
  );
}
