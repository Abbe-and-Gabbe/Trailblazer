"use client";

import Image from "next/image";

// Set the page title
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Trailblazer";
  }, []);

  return (
    <div>
      <Head>
        <title>Trailblazer</title>
      </Head>
      <header>
        <h1>Welcome to Trailblazer</h1>
        <p>Data visualization with the WHAT-WHY-HOW method</p>
      </header>
    </div>
  );
}
