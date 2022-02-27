import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Header from "components/Header";
import Banner from "components/Banner";
import Welcome from "components/HomeSections/Welcome";
import Products from "components/HomeSections/Products";
import News from "components/HomeSections/News";
import Footer from "components/Footer";
import Partners from "components/HomeSections/Partners";
import FooterBar from "components/FooterBar";
import FastLink from "components/HomeSections/FastLink";
import { getAllProducts } from "lib/product";
import { getAllNews } from "lib/news";
import { getInfo } from "lib/webInfo";

export default function Home({ products, news, info }) {
  return (
    <>
      <Head>
        <title>{info.name}</title>
        <meta name="description" content={info.siteInfo} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <FastLink />
        <Welcome />
        <Products products={products || []} />
        <News news={news} />
        <Partners />
        <Footer />
        <FooterBar />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const { info } = await getInfo();
  const { products } = await getAllProducts(
    `select=name menu slug pictures createAt&status=true&limit=8`
  );
  const { news } = await getAllNews(
    `select=name shortDetails pictures slug createAt&status=true&limit=3`
  );

  return {
    props: {
      products,
      news,
      info,
    },
    revalidate: 10,
  };
};
