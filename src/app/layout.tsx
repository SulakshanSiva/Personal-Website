import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sulakshan Siva",
  description: "My Personal Website - Sulakshan.S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
  );
}
