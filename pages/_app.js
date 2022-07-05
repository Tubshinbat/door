import Head from "next/head";
import { useEffect } from "react";
import { SWRConfig } from "swr";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;
import TimeAgo from "javascript-time-ago";
import mn from "javascript-time-ago/locale/mn.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(mn);
TimeAgo.addLocale(ru);

// Styles
import "styles/ProductSlide.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

// Context
import { OrderStore } from "context/OrderContext";
import Script from "next/script";

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

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v6.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
  return (
    <>
      <Script src="/assets/js/all.min.js" />
      <Head>
        <link href="/assets/css/all.min.css" rel="stylesheet" crossOrigin />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          crossOrigin
        />
      </Head>
      <OrderStore>
        <div id="fb-root"></div>
        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="106255585058341"
        ></div>
        <SWRConfig
          value={{
            refreshInterval: 84000,
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
      </OrderStore>
    </>
  );
}

export default MyApp;
