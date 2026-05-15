import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MobileNav } from "@/components/mobile-nav";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimi UI Template",
  description: "Modern UI template for Next.js projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-sans antialiased pb-16 lg:pb-0`}>
        <TooltipProvider>
          {children}
          <MobileNav />
        </TooltipProvider>
      </body>
    </html>
  );
}
