import base from "base";
import ReactTimeAgo from "react-time-ago";
import PageHead from "components/Breadcrumbs";
import Header from "components/Header";
import { getAllNews, getNews, updateView } from "lib/news";
import Head from "next/head";
import { useRouter } from "next/router";

import sideCss from "styles/Aside.module.css";
import css from "styles/News.module.css";
import Partners from "components/HomeSections/Partners";
import Footer from "components/Footer";
import FooterBar from "components/FooterBar";
import { useEffect } from "react";

const News = ({ singleNews, news }) => {
  const router = useRouter();
  useEffect(async () => {
    const { slug } = router.query;
    await updateView(slug);
  }, []);

  if (router.isFallback) return <div>Түр хүлээнэ үү ...</div>;

  return (
    <>
      <Head>
        <title>{singleNews.name} - МЕТАЛ ХААЛГА METAL DOOR</title>
        <meta
          property="og:url"
          content={`${base.baseUrl}/n/${singleNews.slug}`}
        />
        <meta property="og:type" content="news" />
        <meta property="og:title" content={singleNews.name} />
        <meta
          property="og:description"
          content="Манай компани нь БНХАУ, ОХУ болон Европын улс орнуудаас үйлдвэрийн автомат хаалгануудыг Монгол орныхоо цаг уурын онцлог болон барилгын стандартад нийцсэн автомат хаалгуудыг нийлүүлж байна. Бид дан ганц нийлүүлэхийн зэрэгцээ угсралт суурилуулалт, засвар үйлчилгээг үйлдвэрлэгчээс тогтоосон стандартын дагуу мэргэжлийн өндөр түвшинд гүйцэтгэж байна."
        />
      </Head>
      <Header />
      <PageHead
        prev={`Мэдээ мэдээлэл`}
        prevLink={`${base.baseUrl}news/`}
        title={singleNews.name}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className={css.News__details}>
                <h4 className={css.News__details_title}> {singleNews.name} </h4>
                <div className={css.News__details_spans}>
                  <div className={css.News__details_date}>
                    <i className="fa-solid fa-calendar"></i>
                    <span>
                      <ReactTimeAgo date={singleNews.createAt} locale="mn-MN" />
                    </span>
                  </div>
                  <div className={css.News__details_views}>
                    <i className="fa-solid fa-bolt"></i>
                    <span>{singleNews.views}</span>
                  </div>
                </div>

                <div
                  className={css.News__details_info}
                  dangerouslySetInnerHTML={{
                    __html: singleNews && singleNews.details,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={sideCss.Side}>
                <div
                  className={`${sideCss.Side__box} wow animate__animated animate__fadeInDown`}
                  data-wow-delay={`0.2s`}
                >
                  <div className={sideCss.Side__title}>
                    <h5> Туслах цэс</h5>
                  </div>
                  <ul className={sideCss.Side__menus}>
                    <li>
                      <a href={`${base.baseUrl}product`}> Бүтээгдэхүүн </a>
                    </li>
                    <li>
                      <a href={`${base.baseUrl}news`}> Мэдээ мэдээлэл </a>
                    </li>
                    <li>
                      <a href={`${base.baseUrl}services`}> Засвар үйлчилгээ </a>
                    </li>
                    <li>
                      <a href={`${base.baseUrl}contact`}> Холбоо барих </a>
                    </li>
                  </ul>
                </div>
                <div
                  className={`${sideCss.Side__box} wow animate__animated animate__fadeInDown`}
                  data-wow-delay={`0.4s`}
                >
                  <div className={sideCss.Side__title}>
                    <h5> Эрэлттэй нийтлэл </h5>
                  </div>
                  <div className={sideCss.News_boxs}>
                    {news &&
                      news.map((el, index) => (
                        <a
                          href={`${base.baseUrl}n/${el.slug}`}
                          className={`${sideCss.News__box} wow animate__animated animate__fadeIn`}
                          data-wow-delay={`0.${index + 7}s`}
                          key={el.slug}
                        >
                          <div className={sideCss.News__imageBox}>
                            <img
                              src={`http://localhost:8000/uploads/150x150/${el.pictures[0]}`}
                            />
                          </div>
                          <div className={sideCss.News__infos}>
                            <h5> {el.name} </h5>
                            <span>
                              <ReactTimeAgo date={el.createAt} locale="mn-MN" />
                            </span>
                          </div>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
      <Footer />
      <FooterBar />
    </>
  );
};

export const getStaticPaths = async () => {
  const { news } = await getAllNews(`limit=10`);
  return {
    paths: news.map((el) => ({
      params: {
        slug: el.slug,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { news } = await getAllNews(
    `select=name createAt pictures slug&sort={ views: -1 }&status=true&limit=3`
  );
  const { singleNews } = await getNews(params.slug);

  return {
    props: {
      news,
      singleNews,
    },
  };
};

export default News;
