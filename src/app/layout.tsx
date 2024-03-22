import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import { Inter as FontSans } from "next/font/google"
import { LucideIcon } from "lucide-react";
import SideNav from "@/components/SideNav";
import Header from '@/components/Header'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { Metadata } from "next";
import {ResizablePanelGroup} from "@/components/ui/resizable";
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from "@/components/ui/scroll-area";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background font-sans antialiased p-0 m-0", fontSans.variable)}>
        <main className={"bg-background flex flex-row"}>
          <SideNav/>
          <Card className={"rounded-none h-screen w-full"}>
            <CardHeader>
              <CardTitle>
                {metadata.title ?? "Page title"}
              </CardTitle>
            </CardHeader>
            <Separator/>
            <ScrollArea>
              
            <CardContent className={"p-4"}>
            {children}
            </CardContent>
            </ScrollArea>
          </Card>
        </main>
          <footer className={"h-16 bg-gray-800 text-white flex items-center justify-center"}>
          </footer>
      </body>
    </html>
  );
}
