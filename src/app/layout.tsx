import React from "react";
import "@/index.css";
import {StyleProvider} from "@/contexts/StyleContext";

export const metadata = {
  title: "Naga Nikhil Bijjala",
  description: "A beautiful portfolio template for developers",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
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
