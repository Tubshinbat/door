import Image from "next/image";
import Link from "next/link";
import css from "styles/Sections/Product.module.css";

const Products = () => {
  return (
    <section className="productsSection">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={css.ProductInfo}>
              <h4> Танд санал болгох бүтээгдэхүүнд</h4>
              <p>
                Манай компан 2020 оноос хойш Монгол улсдаа Yuou Industrial doors
                брэндийн халгуудыг оруулж ирж байна
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <Link href="/products/product1">
              <div className={css.Product}>
                <div className={css.ProductImg}>
                  <Image src="/assets/img/product-1.jpg" layout="fill" />
                </div>
                <h5>Roller shutter door for truck</h5>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            {" "}
            <Link href="/products/product1">
              <div className={css.Product}>
                <div className={css.ProductImg}>
                  <Image src="/assets/img/product-2.jpg" layout="fill" />
                </div>
                <h5>Steel Wind Resistant Roller Shutter Door</h5>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link href="/products/product1">
              <div className={css.Product}>
                <div className={css.ProductImg}>
                  <Image src="/assets/img/product-3.jpg" layout="fill" />
                </div>
                <h5>Crystal Roller Shutter Door</h5>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link href="/products/product1">
              <div className={css.Product}>
                <div className={css.ProductImg}>
                  <Image src="/assets/img/product-4.jpg" layout="fill" />
                </div>
                <h5>Alluminum Roller Shutter Door</h5>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link href="/products/product1">
              <div className={css.Product}>
                <div className={css.ProductImg}>
                  <Image src="/assets/img/product-5.jpg" layout="fill" />
                </div>
                <h5>Steel Fire Roller Shutter Door</h5>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link href="/products/product1">
              <div className={css.Product}>
                <div className={css.ProductImg}>
                  <Image src="/assets/img/product-6.jpg" layout="fill" />
                </div>
                <h5>Inorganic Fabric Fire Shutter Door</h5>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link href="/products/product1">
              <div className={css.Product}>
                <div className={css.ProductImg}>
                  <Image src="/assets/img/product-7.jpg" layout="fill" />
                </div>
                <h5>Garage Door</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className={css.ProductFoot}>
          <a href="/products" className={css.moreBtn}>
            {" "}
            Бүх хаалгуудыг харах
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
