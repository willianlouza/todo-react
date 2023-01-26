import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (theme) setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div className="w-16 h-8 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600">
          <FaMoon className="absolute w-5 h-5 top-1.5 left-2 text-amber-400" />
          <FaSun className="absolute w-5 h-5 top-1.5 right-2 text-amber-400" />
        </div>
      </label>
    </>
  );
}
