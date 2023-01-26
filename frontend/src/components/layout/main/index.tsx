import Head from "next/head";
import { useState } from "react";
import Navbar from "../navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function MainLayout(props: Props) {
  const { children, title = "TODO List", className = "" } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated images with AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main
        className={`${className} min-h-screen pt-24 px-8 gap-4 flex flex-col items-center`}
      >
        {children}
      </main>
    </>
  );
}
