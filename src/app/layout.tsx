import "./assets/styles/globals.css";
import type { Metadata } from "next";

import { Geist, Inter, JetBrains_Mono } from "next/font/google";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { PersistedSidebarProvider } from "@/components/persisted-sidebar-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowStock OMS",
  description: "FlowStock operations workspace aligned to Stitch design tokens and Shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geistSans.variable, jetBrainsMono.variable, inter.variable)}>
      <body className="min-h-full bg-surface text-on-surface antialiased">
        <PersistedSidebarProvider>
          <TooltipProvider>
            <AppSidebar />
            <Header />
            {children}
          </TooltipProvider>
        </PersistedSidebarProvider>
      </body>
    </html>
  );
}
