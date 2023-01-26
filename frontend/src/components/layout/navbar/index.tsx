import ThemeButton from "@/components/layout/theme-button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <div className="border-b border-gray-600/25 dark:border-white/25 bg-indigo-500  shadow-sm backdrop-blur-sm transition-all duration-200 z-30 fixed top-0 left-0 w-full py-3 px-6 flex items-center justify-between">
      <Image className="drop-shadow-md" alt="a" src="/images/logo.png" width={48} height={48} />

      <div className="flex gap-4 items-center">
        <ThemeButton />
      </div>
    </div>
  );
}
