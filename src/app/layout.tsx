import React from "react";
import "@/index.css";
import {StyleProvider} from "@/contexts/StyleContext";

export const metadata = {
  title: "Naga Nikhil Bijjala | UI/UX Engineer",
  description:
    "UI/UX Engineer crafting intuitive digital experiences with expertise in React, Next.js, Design Systems, and modern frontend architecture.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <StyleProvider>{children}</StyleProvider>
      </body>
    </html>
  );
}
