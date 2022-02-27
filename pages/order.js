import Head from "next/head";
import ReactTimeAgo from "react-time-ago";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

import PageHead from "components/Breadcrumbs";
import Footer from "components/Footer";
import FooterBar from "components/FooterBar";
import Header from "components/Header";
import Partners from "components/HomeSections/Partners";
import base from "base";

import css from "styles/Order.module.css";
import sideCss from "styles/Aside.module.css";

import { getAllNews } from "lib/news";
import { childMenus } from "lib/menu";
import { requiredCheck, regEmail, onlyNumber } from "lib/inputRegex";

import OrderContext from "context/OrderContext";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { productAdd } from "lib/product";
import { toastControl } from "lib/toastControl";
import { orderAdd } from "lib/order";

const Order = ({ news, menus }) => {
  const router = useRouter();

  const ctx = useContext(OrderContext);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({
    name: false,
    phoneNumber: false,
    email: false,
  });

  if (router.isFallback) return <div>Түр хүлээнэ үү ...</div>;

  // CHECK FROMS

  const checkFrom = (name, val) => {
    // Шалгах формуудаа энд тодорхойлоно
    const valueErrors = Object.keys(errors);
    if (valueErrors.find((el) => checkName(el, name))) {
      let result = requiredCheck(val);
      if (name === "email" && result === true) result = regEmail(val);
      if (name === "phoneNumber" && result === true) result = onlyNumber(val);
      setErrors((bfError) => ({ ...bfError, [name]: result }));
    }
  };

  const checkTrue = () => {
    let errorCount = 0;
    let errorsValues = Object.values(errors);
    errorsValues.map((el) => {
      el === true && errorCount++;
    });
    return errorsValues.length === errorCount;
  };

  const allCheck = () => {
    Object.keys(errors).map((el) => {
      checkFrom(el, data[el] === undefined ? "" : data[el]);
    });

    return checkTrue();
  };

  const checkName = (el, name) => {
    return name === el;
  };

  // handle change

  const handleChange = (event) => {
    let { name, value } = event.target;
    setData((bf) => ({ ...bf, [name]: value }));
    checkFrom(event.target.name, event.target.value);
  };

  const handleSend = async () => {
    if (allCheck()) {
      data.product = ctx.order.product._id;
      data.quantiy = ctx.order.count;
      const { result, error } = await orderAdd(data);
      setData(() => ({
        name: "",
        message: "",
        phoneNumber: "",
        companyName: "",
        email: "",
      }));
      if (result) {
        toastControl("success", "Таны захиалгыг хүлээж авлаа");
      }
      if (error) {
        toastControl("error", error);
      }
    }
  };

  return (
    <>
      <Head>
        <title>{`Захиалга өгөх - Метал хаалга - METAL DOOR`}</title>
        <meta
          name="description"
          content={`барилгын стандартад нийцсэн автомат хаалгуудыг нийлүүлж байна. Бид дан ганц нийлүүлэхийн зэрэгцээ угсралт суурилуулалт, засвар үйлчилгээг үйлдвэрлэгчээс тогтоосон стандартын дагуу мэргэжлийн өндөр түвшинд гүйцэтгэж байна`}
        />
        <meta property="og:type" content="order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHead title={`Захиалга өгөх`} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className={css.Product_view}>
                <h4>Бүтээгдэхүүний нэр</h4>
                <table className={css.Product__table}>
                  <tr>
                    <th>Бүтээгдэхүүний зураг</th>
                    <th>Бүтээгдэхүүний нэр</th>
                    <th>Тоо ширхэг</th>
                  </tr>
                  {ctx && ctx.order && (
                    <tr>
                      <td>
                        {ctx.order.product.pictures && (
                          <img
                            src={
                              base.fileUrl +
                              "150x150/" +
                              ctx.order.product.pictures[0]
                            }
                          />
                        )}
                      </td>
                      <td>{ctx.order.product.name}</td>
                      <td>
                        {ctx.order.product.name && (
                          <div className={css.Quantity}>
                            <button onClick={ctx.minus}> - </button>
                            <input
                              type="text"
                              name="quantiy"
                              value={ctx.order.count}
                              onChange={handleChange}
                            />
                            <button onClick={ctx.add}> + </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  )}
                </table>
              </div>
              <div className={css.Order__box}>
                <div className="row">
                  <div className={`col-6 ${css.Order__input_box}`}>
                    <label> Нэр </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Та нэрээ оруулна уу"
                      value={data.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && (
                      <span className={`litleError`}>{errors.name}</span>
                    )}
                  </div>
                  <div className={`col-6 ${css.Order__input_box}`}>
                    <label> Имэйл </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={data.email}
                      placeholder="Та имэйл хаягаа оруулна уу"
                      onChange={handleChange}
                      required
                    />
                    {errors.email && (
                      <span className={`litleError`}>{errors.email}</span>
                    )}
                  </div>
                  <div className={`col-6 ${css.Order__input_box}`}>
                    <label> Компаний нэр</label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyName"
                      value={data.companyName}
                      placeholder="Команий нэрээ оруулна уу"
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`col-6 ${css.Order__input_box}`}>
                    <label> Утасны дугаар </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Утасны дугаараа оруулна уу"
                      name="phoneNumber"
                      value={data.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                    {errors.phoneNumber && (
                      <span className={`litleError`}>{errors.phoneNumber}</span>
                    )}
                  </div>
                  <div className={`col-12 ${css.Order__input_box}`}>
                    <label> Нэмэлт мэдээлэл</label>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Нэмэлт мэдээлэл өгнө үү"
                      onChange={handleChange}
                    >
                      {data.message}
                    </textarea>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className={`btn ${css.Order__btn}`}
                    onClick={handleSend}
                    type="button"
                  >
                    Захиалга өгөх
                  </button>
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
      <Partners />
      <Footer />
      <FooterBar />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { news } = await getAllNews(
    `select=name createAt pictures slug&sort={ views: -1 }&limit=3 &status=true`
  );
  const { menus } = await childMenus("product");
  return {
    props: {
      news,
      menus,
    },
    revalidate: 20,
  };
};

export default Order;
