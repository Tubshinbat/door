import css from "styles/Sections/FastLink.module.css";
import Link from "next/link";

const FastLink = () => {
  return (
    <section className={css.FastLinkSection}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="/services/fix">
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
            <a href="/products">
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
            <a href="/contact">
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