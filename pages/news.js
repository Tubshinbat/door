import base from "base";
import PageHead from "components/Breadcrumbs";
import Footer from "components/Footer";
import FooterBar from "components/FooterBar";
import Header from "components/Header";
import Partners from "components/HomeSections/Partners";
import { useNews } from "hooks/use-news";
import { getAllNews } from "lib/news";
import Head from "next/head";
import Link from "next/link";
import ReactTimeAgo from "react-time-ago";

import css from "styles/News.module.css";
import sideCss from "styles/Aside.module.css";

const News = ({ news, topNews }) => {
  const { newsData } = useNews(news, "status=true");
  const { newsData: newsTop } = useNews(
    topNews,
    `select=name createAt pictures slug&status=true&limit=3&sort={views: -1}`
  );

  return (
    <>
      <Head>
        <title>{`Мэдээ мэдээлэл - Метал хаалга - METAL DOOR`}</title>
        <meta
          name="description"
          content={`барилгын стандартад нийцсэн автомат хаалгуудыг нийлүүлж байна. Бид дан ганц нийлүүлэхийн зэрэгцээ угсралт суурилуулалт, засвар үйлчилгээг үйлдвэрлэгчээс тогтоосон стандартын дагуу мэргэжлийн өндөр түвшинд гүйцэтгэж байна`}
        />
        <meta property="og:type" content="news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHead title={`Мэдээ мэдээлэл`} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h5 className={css.Newsbox__title}>
                Сүүлийн үеийн мэдээ мэдээлэл
              </h5>
              <div className={css.Newsbox}>
                {newsData &&
                  newsData.map((el) => (
                    <div className={css.News__item} key={el.slug}>
                      <Link href={`/n/${el.slug}`}>
                        <a className={`col-lg-5 ${css.News__image_box}`}>
                          <img src={base.fileUrl + "450/" + el.pictures[0]} />
                        </a>
                      </Link>
                      <div className={`col-lg-7 ${css.News__decsription}`}>
                        <Link href={`/n/${el.slug}`}>
                          <h5 className={css.News__title}>{el.name}</h5>
                        </Link>
                        <div className={css.News__date}>
                          <i className="fa-solid fa-clock"></i>
                          <span>
                            <ReactTimeAgo date={el.createAt} locale="mn-MN" />
                          </span>
                        </div>
                        <p> {el.shortDetails} </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className={sideCss.Side}>
                <div
                  className={`${sideCss.Side__box} wow animate__animated animate__fadeInDown`}
                  data-wow-delay={`0.3s`}
                >
                  <div className={sideCss.Side__title}>
                    <h5> Туслах цэс </h5>
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
                    {newsTop &&
                      newsTop.map((el, index) => (
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

export const getStaticProps = async () => {
  const { news } = await getAllNews(
    `select=name createAt pictures slug&status=true`
  );
  const { news: topNews } = await getAllNews(
    `select=name createAt pictures slug&status=true&limit=3&sort={views: -1}`
  );

  return {
    props: {
      news,
      topNews,
    },
  };
};

export default News;
