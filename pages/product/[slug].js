import { useRouter } from "next/router";
import Head from "next/head";
import Zoom from "react-img-zoom";

import base from "base";
import PageHead from "components/Breadcrumbs";
import Footer from "components/Footer";
import FooterBar from "components/FooterBar";
import Header from "components/Header";
import Partners from "components/HomeSections/Partners";
import { getAllProducts, getProduct } from "lib/product";

import css from "styles/Product.module.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const Product = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const router = useRouter();
  if (router.isFallback) return <div>Түр хүлээнэ үү ...</div>;

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{product.name} - МЕТАЛ ХААЛГА METAL DOOR</title>
        <meta
          property="og:url"
          content={`${base.baseUrl}/product/${product.slug}`}
        />
        <meta property="og:type" content="PRODUCT" />
        <meta property="og:title" content={product.name} />
        <meta
          property="og:description"
          content="Манай компани нь БНХАУ, ОХУ болон Европын улс орнуудаас үйлдвэрийн автомат хаалгануудыг Монгол орныхоо цаг уурын онцлог болон барилгын стандартад нийцсэн автомат хаалгуудыг нийлүүлж байна. Бид дан ганц нийлүүлэхийн зэрэгцээ угсралт суурилуулалт, засвар үйлчилгээг үйлдвэрлэгчээс тогтоосон стандартын дагуу мэргэжлийн өндөр түвшинд гүйцэтгэж байна."
        />
        <meta
          name="twitter:site"
          content={`${product.name} - МЕТАЛ ХААЛГА METAL DOOR`}
        />
        <meta name="twitter:creator" content="METAL DOOR" />
        <meta
          property="og:url"
          content={`${base.baseUrl}/product/${product.slug}`}
        />
        <meta
          property="og:title"
          content={`${product.name} - МЕТАЛ ХААЛГА METAL DOOR`}
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
        title={product.name}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className={css.Product__description}>
                <div className={css.Images}>
                  <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="productSlide"
                  >
                    {product.pictures &&
                      product.pictures.map((el, index) => (
                        <SwiperSlide className="product__slide">
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
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="productThumbs"
                  >
                    {product.pictures &&
                      product.pictures.map((el, index) => (
                        <SwiperSlide className="productThumbs__slide">
                          <img
                            key={`image_${index}`}
                            src={base.fileUrl + "150x150/" + el}
                          />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
                <div className={css.ShortDetails}>
                  <h4>{product.name} </h4>
                  <p>{product.shortDetails}</p>

                  <div className={css.Quantity}>
                    <button> - </button>
                    <input type="text" name="quantiy" />
                    <button> + </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">b</div>
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

  return {
    props: {
      product,
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

export default Product;
