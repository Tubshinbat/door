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

const Product = ({ products }) => {
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
                {products &&
                  products.map((el) => (
                    <div className="col-xl-4 col-lg-4 col-md-6" key={el.slug}>
                      <Link href={`/product/${el.slug}`}>
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
            <div className="col-lg-4">
              <div className={sideCss.Side}>
                <div className={sideCss.Side__box}>
                  <div className={sideCss.Side__title}>
                    <h5> Туслах цэс </h5>
                  </div>
                  <ul className={sideCss.Side__menus}>
                    <li>
                      <a href="/product"> Бүтээгдэхүүн </a>
                    </li>
                    <li>
                      <a href="/news"> Мэдээ мэдээлэл </a>
                    </li>
                    <li>
                      <a href="/services"> Засвар үйлчилгээ </a>
                    </li>
                    <li>
                      <a href="/contact"> Холбоо барих </a>
                    </li>
                  </ul>
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
  const { products } = await getAllProducts();
  return {
    props: {
      products,
    },
  };
};

export default Product;
