import Image from "next/image";
import Link from "next/link";
import css from "styles/Sections/Product.module.css";

const Products = (props) => {
  return (
    <section
      className="productsSection wow animate__animated animate__fadeIn"
      data-wow-delay={`0.5s`}
    >
      <div className="sectionHader">
        <h4>Танд санал болгох бүтээгдэхүүнд</h4>
        <p>
          Манай компан 2016 оноос хойш Монгол улсдаа Yuou Industrial doors
          брэндийн халгуудыг оруулж ирж байна
        </p>
      </div>

      <div className="container">
        <div className="row">
          {props.products &&
            props.products.map((el) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={el.slug}>
                <Link href={`/product/${el.slug}`}>
                  <div className={css.Product}>
                    <div className={css.ProductImg}>
                      <img
                        src={`http://localhost:8000/uploads/${el.pictures[0]}`}
                      />
                    </div>
                    <h5>{el.name}</h5>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div className={css.ProductFoot}>
          <a href="/product" className={css.moreBtn}>
            {" "}
            Бүх хаалгануудыг үзэх
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
