import PageHead from "components/Breadcrumbs";
import Footer from "components/Footer";
import FooterBar from "components/FooterBar";
import Header from "components/Header";
import Partners from "components/HomeSections/Partners";
import { getAllProducts } from "lib/product";
import Head from "next/head";
import Link from "next/link";

import css from "styles/Product.module.css";
import sideCss from "styles/Aside.module.css";
import { getAllNews } from "lib/news";
import ReactTimeAgo from "react-time-ago";
import base from "base";
import { childMenus } from "lib/menu";
import { useProduct } from "hooks/use-product";

const Product = ({ products, news, menus }) => {
  const { useProducts } = useProduct(products, `status=true`);

  return (
    <>
      <Head>
        <title>
          МЕТАЛ ХААЛГА - METAL DOOR АВТОМАТ ҮЙЛДВЭР БОЛОН АЛБАН БАЙГУУЛГЫН
          ЗОРИУЛТАТАЙ ХААЛГАНЫ ТӨРӨЛЖСӨН ХУДАЛДАА
        </title>
        <meta
          name="description"
          content={`Үйлдвэрийн автомат хаалга, автомат хаалга, албан байгууллагын автомат хаалга, хаалга, бүрэн автомат хаалга, мэдрэмжтэй автомат хаалга, хаалганы худалдаа, хаалганы засвар үйлчилгээ, угсралт суурилуулалт`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHead title={`Бүтээгдэхүүнүүд`} />
      <section className={css.Product__Section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className={css.Products}>
                <div className="row">
                  {useProducts &&
                    useProducts.map((el, index) => (
                      <div
                        className="col-xl-4 col-lg-4 col-md-6 wow animate__animated animate__fadeInUp"
                        data-wow-delay={`0.${index + 1}s`}
                        key={el.slug}
                      >
                        <Link href={`/p/${el.slug}`}>
                          <div className={css.Product}>
                            <div className={css.ProductImg}>
                              <img
                                src={`http://localhost:8000/uploads/450/${el.pictures[0]}`}
                              />
                            </div>
                            <h5>{el.name}</h5>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={sideCss.Side}>
                <div
                  className={`${sideCss.Side__box} wow animate__animated animate__fadeInDown`}
                  data-wow-delay={`0.2s`}
                >
                  <div className={sideCss.Side__title}>
                    <h5> Бүтээгдэхүүний ангилал</h5>
                  </div>
                  <ul className={sideCss.Side__menus}>
                    {menus &&
                      menus.map((el, index) => (
                        <li key={`_menu_${index}`}>
                          <Link href={`/product/${el.slug}`}>{el.name}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
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

export const getStaticProps = async ({ params }) => {
  const { products } = await getAllProducts(`status=true`);
  const { news } = await getAllNews(
    `select=name createAt pictures slug&sort={ views: -1 }&status=true&limit=3`
  );
  const { menus } = await childMenus("product");
  return {
    props: {
      products,
      news,
      menus,
    },
  };
};

export default Product;
