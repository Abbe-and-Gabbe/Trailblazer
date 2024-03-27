"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google"
import { Home, Settings, HelpCircle, AlertCircle, Archive, ArchiveX, Inbox, MessagesSquare, Search, Send, ShoppingCart, Trash2, Users2 } from "lucide-react";
import SideNav from "@/components/SideNav";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Separator } from '@/components/ui/separator';
import { useState } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";


const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
        <TooltipProvider delayDuration={0}>
          <ResizablePanelGroup
            direction="horizontal"
            onLayout={(sizes: number[]) => {
              document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                sizes,
              )}`;
            }}
            className="items-stretch h-auto w-full flex flex-row"
          >
            <ResizablePanel
              defaultSize={20}
              collapsible={false}
              minSize={10}
              maxSize={20}
              className="h-screen"
            >
              <div
                className={cn(
                  "flex h-[52px] items-center justify-center",
                  isCollapsed ? "h-[52px]" : "px-2",
                )}
              >
                Trailblazer
              </div>
              {/* <Dataset Selector /> */}
              <Separator />
              <SideNav
                isCollapsed={isCollapsed}
                links={[
                  {
                    title: "Item 1",
                    label: "128",
                    icon: Home,
                    variant: "default",
                  },
                  {
                    title: "Item 2",
                    label: "",
                    icon: Settings,
                    variant: "ghost",
                  },
                  {
                    title: "Item 3",
                    label: "23",
                    icon: HelpCircle,
                    variant: "ghost",
                  },
                  {
                    title: "Item 4",
                    label: "",
                    icon: ArchiveX,
                    variant: "ghost",
                  },
                  {
                    title: "Item 5",
                    label: "",
                    icon: Inbox,
                    variant: "ghost",
                  },
                ]}
              />
              <Separator />
              <SideNav
                isCollapsed={isCollapsed}
                links={[
                  {
                    title: "Social",
                    label: "972",
                    icon: Users2,
                    variant: "ghost",
                  },
                  {
                    title: "Updates",
                    label: "342",
                    icon: AlertCircle,
                    variant: "ghost",
                  },
                  {
                    title: "Forums",
                    label: "128",
                    icon: MessagesSquare,
                    variant: "ghost",
                  },
                  {
                    title: "Shopping",
                    label: "8",
                    icon: ShoppingCart,
                    variant: "ghost",
                  },
                  {
                    title: "Promotions",
                    label: "21",
                    icon: Archive,
                    variant: "ghost",
                  },
                ]}
              />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={100} className="h-screen">
              <ScrollArea className="h-full w-full p-4">
                {children}
                </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
        </TooltipProvider>

      </body>
    </html>
  );
}
