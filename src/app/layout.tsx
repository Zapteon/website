import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/pages/additional/navbar/Navbar";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zapteon",
  description: "Fastest way to get into web!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn("bg-primary text-secondary flex flex-col", jost.className)}
      lang="en"
    >
      <body>
        <Navbar />
        <div className="mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
