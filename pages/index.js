import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Header from "components/Header";
import Banner from "components/Banner";
import Welcome from "components/HomeSections/Welcome";
import Products from "components/HomeSections/Products";
import News from "components/HomeSections/News";

export default function Home() {
  return (
    <>
      <Head>
        <title>Хаалга</title>
        <meta name="description" content="Door" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <Welcome />
        <Products />
        <News />
      </main>
    </>
  );
}
