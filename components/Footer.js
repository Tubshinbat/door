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

const Footer = () => {
  const { info } = useChangeInfo();

  return (
    <footer className={css.Footer}>
      {/* /footer */}
      <Container>
        <Row>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className={css.FooterAbout}>
              <img src={`http://localhost:8000/uploads/${info.whiteLogo}`} />
              <p>{info.siteInfo}</p>
            </div>
          </div>
          <div className="col-xl-3  col-lg-3 col-md-12">
            <ul className={css.FooterMenu}>
              <li>
                <Link href="/"> Эхлэл </Link>
              </li>
              <li>
                <Link href="/product">Бүтээгдэхүүн</Link>
              </li>
              <li>
                <a href="/news"> Мэдээ мэдээлэл </a>
              </li>

              <li>
                <Link href="/contact"> Холбоо барих </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3  col-lg-3 col-md-12">
            <div className={css.FooterContact}>
              <div className={css.FooterPhone}>
                <FontAwesomeIcon icon={faPhone} className={css.TopbarIcon} />
                <a href={`tel:${info.phone}`}>{info.phone}</a>
              </div>
              <div className={css.FooterMail}>
                <FontAwesomeIcon icon={faEnvelope} className={css.TopbarIcon} />
                <a href={`mailto:${info.email}`}> {info.email}</a>
              </div>
              <div className={css.SocialIcons}>
                <a href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebookF} className={css.Icons} />
                </a>
                <a href="https://www.twitter.com/">
                  <FontAwesomeIcon icon={faTwitter} className={css.Icons} />
                </a>
                <a href="https://www.youtube.com/">
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
