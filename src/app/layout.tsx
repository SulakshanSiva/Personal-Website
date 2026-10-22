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
          {/* On phones the toggle lives in the Nav header instead */}
          <ThemeToggle className="fixed bottom-6 right-6 z-50 hidden shadow-lg md:inline-flex" />
        </ThemeProvider>
      </body>
    </html>
  );
}
