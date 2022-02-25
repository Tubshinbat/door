import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { SWRConfig } from "swr";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;
import { useEffect } from "react";
import TimeAgo from "javascript-time-ago";

import mn from "javascript-time-ago/locale/mn.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(mn);
TimeAgo.addLocale(ru);

// Styles
import "styles/ProductSlide.css";
import "animate.css";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SWRConfig
        value={{
          refreshInterval: 5000,
          fetcher,
          onError: (error, key) => {
            if (error.status !== 403 && error.status !== 404) {
              // alert("Алдаа");
            }
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;
