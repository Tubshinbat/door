import base from "base";
import Image from "next/image";
import Link from "next/link";
import css from "styles/Sections/Product.module.css";

const Products = (props) => {
  return (
    <section className="productsSection ">
      <div className="sectionHader">
        <h4
          className=" wow animate__animated animate__fadeInDown"
          data-wow-delay={`0.3s`}
        >
          Танд санал болгох бүтээгдэхүүнд
        </h4>
        <p
          className=" wow animate__animated animate__fadeInUp"
          data-wow-delay={`0.5s`}
        >
          Манай компан 2016 оноос хойш Монгол улсдаа Yuou Industrial doors
          брэндийн халгуудыг оруулж ирж байна
        </p>
      </div>

      <div className="container">
        <div className="row">
          {props.products &&
            props.products.map((el) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow animate__animated animate__fadeInDown"
                data-wow-delay={`0.5s`}
                key={el.slug}
              >
                <Link href={`/p/${el.slug}`}>
                  <div className={css.Product}>
                    <div className={css.ProductImg}>
                      <img
                        src={`https://cdn.metaldoor.mn/uploads/${el.pictures[0]}`}
                      />
                    </div>
                    <h5>{el.name}</h5>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div className={css.ProductFoot}>
          <a
            href={base.baseUrl + `product`}
            className={`${css.moreBtn} wow animate__animated animate__fadeInDown`}
            data-wow-delay={`0.7s`}
          >
            {" "}
            Бүх хаалгануудыг үзэх
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
