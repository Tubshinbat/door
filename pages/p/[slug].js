import { useRouter } from "next/router";
import Head from "next/head";
import ReactTimeAgo from "react-time-ago";

import base from "base";
import PageHead from "components/Breadcrumbs";
import Footer from "components/Footer";
import FooterBar from "components/FooterBar";
import Header from "components/Header";
import Partners from "components/HomeSections/Partners";
import { getAllProducts, getProduct } from "lib/product";

import css from "styles/Product.module.css";
import sideCss from "styles/Aside.module.css";

import OrderContext from "context/OrderContext";
import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { getAllNews } from "lib/news";
import { childMenus } from "lib/menu";
import Link from "next/link";
import { useEffect } from "react";
import { useGetProduct } from "hooks/use-product";

const SingleProduct = ({ product, news, menus }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const count = 1;
  const router = useRouter();
  const { slug } = router.query;
  const { productData, error } = useGetProduct(product, slug);
  const ctx = useContext(OrderContext);

  useEffect(() => {
    if (product) ctx.setOrder((bf) => ({ ...bf, product: { ...product } }));
  }, [product]);

  if (router.isFallback) return <div>Түр хүлээнэ үү ...</div>;

  const orderClick = () => {
    router.push("/order");
  };

  return (
    <>
      <Head>
        <title>{productData.name} - МЕТАЛ ХААЛГА METAL DOOR</title>
        <meta
          property="og:url"
          content={`${base.baseUrl}/n/${productData.slug}`}
        />
        <meta property="og:type" content="PRODUCT" />
        <meta property="og:title" content={productData.name} />
        <meta
          property="og:description"
          content="Манай компани нь БНХАУ, ОХУ болон Европын улс орнуудаас үйлдвэрийн автомат хаалгануудыг Монгол орныхоо цаг уурын онцлог болон барилгын стандартад нийцсэн автомат хаалгуудыг нийлүүлж байна. Бид дан ганц нийлүүлэхийн зэрэгцээ угсралт суурилуулалт, засвар үйлчилгээг үйлдвэрлэгчээс тогтоосон стандартын дагуу мэргэжлийн өндөр түвшинд гүйцэтгэж байна."
        />
        <meta
          name="twitter:site"
          content={`${productData.name} - МЕТАЛ ХААЛГА METAL DOOR`}
        />
        <meta name="twitter:creator" content="METAL DOOR" />
        <meta
          property="og:url"
          content={`${base.baseUrl}/product/${productData.slug}`}
        />
        <meta
          property="og:title"
          content={`${productData.name} - МЕТАЛ ХААЛГА METAL DOOR`}
        />
        <meta
          property="og:description"
          content="Манай компани нь БНХАУ, ОХУ болон Европын улс орнуудаас үйлдвэрийн автомат хаалгануудыг Монгол орныхоо цаг уурын онцлог болон барилгын стандартад нийцсэн автомат хаалгуудыг нийлүүлж байна. Бид дан ганц нийлүүлэхийн зэрэгцээ угсралт суурилуулалт, засвар үйлчилгээг үйлдвэрлэгчээс тогтоосон стандартын дагуу мэргэжлийн өндөр түвшинд гүйцэтгэж байна."
        />
      </Head>
      <Header />
      <PageHead
        prev={`Бүтээгдэхүүн`}
        prevLink={`${base.baseUrl}product/`}
        title={productData.name}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className={`row ${css.Product__description}`}>
                <div className={`col-md-6 ${css.Images} `}>
                  <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="productSlide"
                  >
                    {productData.pictures &&
                      productData.pictures.map((el, index) => (
                        <SwiperSlide
                          className="product__slide"
                          key={`product_image_${index}`}
                        >
                          <img
                            key={`image_${index}`}
                            src={base.fileUrl + "450/" + el}
                          />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="productThumbs"
                  >
                    {productData.pictures &&
                      productData.pictures.map((el, index) => (
                        <SwiperSlide
                          className="productThumbs__slide"
                          key={`thumbs__${index}`}
                        >
                          <img
                            key={`image_${index}`}
                            src={base.fileUrl + "150x150/" + el}
                          />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
                <div className={`col-md-6 ${css.ShortDetails}`}>
                  <h4>{productData.name} </h4>
                  <p>{productData.shortDetails}</p>

                  <div className={css.Controls}>
                    <div className={css.Quantity}>
                      <button onClick={ctx.minus}> - </button>
                      <input
                        type="text"
                        name="quantiy"
                        value={ctx.order.count}
                      />
                      <button onClick={ctx.add}> + </button>
                    </div>
                    <button
                      className={`btn ${css.OrderBtn}`}
                      onClick={orderClick}
                    >
                      <i className="fa-solid fa-cart-arrow-down"></i> Захиалах
                    </button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className={css.Product__detials}>
                    <h4 className={css.Product__detials_title}>
                      Бүтээгдэхүүний дэлгэрэнгүй
                    </h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: productData && productData.details,
                      }}
                    ></div>
                  </div>
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
  const { product } = await getProduct(params.slug);
  const { news } = await getAllNews(
    `select=name createAt pictures slug&sort={ views: -1 }&status=true&limit=3`
  );
  const { menus } = await childMenus("product");
  return {
    props: {
      product,
      news,
      menus,
    },
  };
};

export const getStaticPaths = async () => {
  const { products } = await getAllProducts(`limit=3`);

  return {
    paths: products.map((el) => ({
      params: {
        slug: el.slug,
      },
    })),
    fallback: true,
  };
};

export default SingleProduct;
