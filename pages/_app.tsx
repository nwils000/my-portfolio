import type { AppProps } from "next/app";
import { useEffect } from "react";
import Modal from "react-modal";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.setAppElement("#__next"); // This is the default root element in Next.js
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio of Nathan Wilson - Web Developer"
        />
        <title>Nathan Wilson - Portfolio</title>
        {/* Additional meta tags */}
        <meta name="author" content="Nathan Wilson" />
        <meta name="keywords" content="portfolio, web development, Next.js" />
        <meta name="theme-color" content="#ffffff" />
        {/* Add more meta tags as needed */}
        <link rel="icon" href="/path/to/favicon.ico" />
        {/* Add your favicon path */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
