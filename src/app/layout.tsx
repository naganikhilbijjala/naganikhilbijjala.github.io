import React from "react";
import "@/index.css";
import {StyleProvider} from "@/contexts/StyleContext";

export const metadata = {
  title: "Naga Nikhil Bijjala",
  description:
    "Software Engineer specializing in full-stack development with expertise in React, Next.js, Node.js, Spring Boot, and cloud technologies.",
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
