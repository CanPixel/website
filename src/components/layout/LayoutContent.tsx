"use client";

import { usePathname } from 'next/navigation';
import Header from "@/components/header"; 
import Footer from "@/components/footer";

export default function LayoutContent({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname();
    const isFigmaPage = pathname === '/figma';
  
    return (
      <div className="relative flex min-h-screen flex-col">
        {!isFigmaPage && <Header />}
            <main className="flex-1">{children}</main>
        {!isFigmaPage && <Footer />}
      </div>
    );
  }