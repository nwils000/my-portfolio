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
          content="Dynamic Web Developer Portfolio: Showcasing a variety of projects created using a diverse range of languages, including React, JavaScript, CSS, and more. Experience visually captivating designs and seamless user interactions."
        />
        <title>Nathan Wilson - Portfolio</title>
        {/* Add additional meta tags here */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://res.cloudinary.com/dwonrd0xx/image/upload/v1686186706/Portfolio/portfolio-icon-16_y5ve9a.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://res.cloudinary.com/dwonrd0xx/image/upload/v1686186706/Portfolio/portfolio-icon-32_epn0q9.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
