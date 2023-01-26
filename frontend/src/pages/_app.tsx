import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Poppins, Unbounded } from "@next/font/google";
import TodoProvider from "@/context/todo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "600", "700", "800", "900"],
});
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
            --unbounded-font: ${unbounded.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider attribute="class">
        <TodoProvider>
          <Component {...pageProps} />
        </TodoProvider>
      </ThemeProvider>
    </>
  );
}
