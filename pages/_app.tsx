import type { AppProps } from "next/app";
import { useEffect } from "react";
import Modal from "react-modal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.setAppElement("#__next"); // This is the default root element in Next.js
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
