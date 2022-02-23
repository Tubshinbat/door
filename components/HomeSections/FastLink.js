import css from "styles/Sections/FastLink.module.css";
import Link from "next/link";

const FastLink = () => {
  return (
    <section className={css.FastLinkSection}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a
              href="/services"
              className=" wow animate__animated animate__fadeInUp"
              data-wow-delay={`0.3s`}
            >
              <div className={css.Block}>
                <div className={css.BlockImg}>
                  <img src="/assets/img/bg-p-1.jpg" />
                </div>
                <div className={css.BlockDesc}>
                  <div className={css.Icon}>
                    <img src="/assets/img/icon1.png" />
                  </div>
                  <div className={css.fastLinkTitle}>Засвар үйлчилгээ</div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="/product"
              className=" wow animate__animated animate__fadeInUp"
              data-wow-delay={`0.5s`}
            >
              <div className={css.Block}>
                <div className={css.BlockImg}>
                  <img src="/assets/img/bg-p-2.jpg" />
                </div>
                <div className={css.BlockDesc}>
                  <div className={css.Icon}>
                    <img src="/assets/img/icon2.png" />
                  </div>
                  <div className={css.fastLinkTitle}>Хаалганууд</div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="/contact"
              className=" wow animate__animated animate__fadeInUp"
              data-wow-delay={`0.7s`}
            >
              <div className={css.Block}>
                <div className={css.BlockImg}>
                  <img src="/assets/img/bg-p-2.jpg" />
                </div>
                <div className={css.BlockDesc}>
                  <div className={css.Icon}>
                    <img src="/assets/img/icon3.png" />
                  </div>
                  <div className={css.fastLinkTitle}>Холбоо барих</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastLink;
