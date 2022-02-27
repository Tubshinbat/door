import { Container, Row } from "react-bootstrap";
import css from "styles/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useChangeInfo } from "hooks/use-info";
import base from "base";

const Footer = () => {
  const { info } = useChangeInfo();

  return (
    <footer className={css.Footer}>
      {/* /footer */}
      <Container>
        <Row>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className={css.FooterAbout}>
              <img
                src={`https://cdn.metaldoor.mn/uploads/${info.whiteLogo}`}
                className="  wow animate__animated animate__fadeInUp"
                data-wow-delay={`0.5s`}
              />
              <p
                className="  wow animate__animated animate__fadeInDown"
                data-wow-delay={`0.7s`}
              >
                {info.siteInfo}
              </p>
            </div>
          </div>
          <div className="col-xl-3  col-lg-3 col-md-12">
            <ul className={css.FooterMenu}>
              <li
                className="  wow animate__animated animate__fadeInUp"
                data-wow-delay={`0.5s`}
              >
                <a href={base.baseUrl}> Эхлэл </a>
              </li>
              <li
                className="  wow animate__animated animate__fadeInUp"
                data-wow-delay={`0.6s`}
              >
                <a href={base.baseUrl + "/product"}>Бүтээгдэхүүн</a>
              </li>
              <li
                className="  wow animate__animated animate__fadeInUp"
                data-wow-delay={`0.7s`}
              >
                <a href={base.baseUrl + "/news"}> Мэдээ мэдээлэл </a>
              </li>

              <li
                className="  wow animate__animated animate__fadeInUp"
                data-wow-delay={`0.8s`}
              >
                <a href={base.baseUrl + "/contact"}> Холбоо барих </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3  col-lg-3 col-md-12">
            <div className={`${css.FooterContact} `}>
              <div
                className={`${css.FooterPhone} wow animate__animated animate__fadeInUp`}
                data-wow-delay={`0.3s`}
              >
                <FontAwesomeIcon icon={faPhone} className={css.TopbarIcon} />
                <a href={`tel:${info.phone}`}>{info.phone}</a>
              </div>
              <div
                className={`${css.FooterMail} wow animate__animated animate__fadeInDown`}
                data-wow-delay={`0.5s`}
              >
                <FontAwesomeIcon icon={faEnvelope} className={css.TopbarIcon} />
                <a href={`mailto:${info.email}`}> {info.email}</a>
              </div>
              <div className={css.SocialIcons}>
                <a
                  href="https://www.facebook.com/"
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-delay={`0.7s`}
                >
                  <FontAwesomeIcon icon={faFacebookF} className={css.Icons} />
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-delay={`0.8s`}
                >
                  <FontAwesomeIcon icon={faTwitter} className={css.Icons} />
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-delay={`0.9s`}
                >
                  <FontAwesomeIcon icon={faYoutube} className={css.Icons} />
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
