import base from "base";
import PageHead from "components/Breadcrumbs";
import Footer from "components/Footer";
import FooterBar from "components/FooterBar";
import Header from "components/Header";
import Partners from "components/HomeSections/Partners";
import { getMenu, getPage } from "lib/page";
import { getPgMenus } from "lib/webInfo";
import Head from "next/head";
import ReactTimeAgo from "react-time-ago";

import css from "styles/Page.module.css";
import sideCss from "styles/Aside.module.css";
import { getAllNews } from "lib/news";
import { usePage } from "hooks/use-page";
import { useRouter } from "next/router";

const SinglePage = ({ menuData, news }) => {
  const router = useRouter();
  const { slug } = router.query;
  const { page } = usePage(slug);

  if (router.isFallback) return <div>Түр хүлээнэ үү ...</div>;

  return (
    <>
      <Head>
        <title> {menuData.name}</title>
      </Head>
      <Header />
      <PageHead title={menuData.name} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className={css.Page__box}>
                <div className={css.Page__header}>
                  <h4 className={css.Page__title}> {page.name} </h4>
                </div>
                <div className={css.Page__info}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: page && page.pageInfo,
                    }}
                  ></div>
                </div>
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
                              src={`https://cdn.metaldoor.mn/uploads/150x150/${el.pictures[0]}`}
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

export const getStaticProps = async ({ params }) => {
  const { menuData } = await getMenu(params.slug);

  const { news } = await getAllNews(
    `select=name createAt pictures slug&sort={ views: -1 }&status=true&limit=3`
  );
  return {
    props: {
      menuData,
      news,
    },
    revalidate: 10000,
  };
};

export const getStaticPaths = async () => {
  const { menus } = await getPgMenus();

  return {
    paths: menus.map((el) => ({
      params: {
        slug: el.slug,
      },
    })),
    fallback: true,
  };
};

export default SinglePage;
