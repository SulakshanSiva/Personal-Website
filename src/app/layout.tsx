import type { Metadata } from "next";
import ThemeProvider from "@/_components/ThemeProvider";
import ThemeToggle from "@/_components/ThemeToggle";
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
