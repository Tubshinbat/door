import Image from "next/image";
import css from "styles/Sections/Welcome.module.css";
import { useInfo } from "hooks/use-info";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [infoData, setInfo] = useState({});
  const { info } = useInfo();

  useEffect(() => {
    if (info) {
      setInfo(info.data);
    }
  }, [info]);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={css.About}>
              <span
                className="wow animate__animated animate__fadeInDown"
                data-wow-delay={`0.3s`}
              >
                Тавтай морил{" "}
              </span>
              <h3
                className="wow animate__animated animate__fadeInUp"
                data-wow-delay={`0.5s`}
              >
                Монгол дахь цорын ганц албан ёсны дистрибьютор
              </h3>
              <p
                className="wow animate__animated animate__fadeInDown"
                data-wow-delay={`0.7s`}
              >
                {infoData.siteInfo}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`${css.AboutImg} wow animate__animated animate__fadeInDown`}
              data-wow-delay={`0.7s`}
            >
              <Image src="/assets/img/about.jpg" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
