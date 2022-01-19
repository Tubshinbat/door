import { Container, Row } from "react-bootstrap";
import css from "styles/Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={css.Footer}>
      <Container>
        <Row>
          <div className="col-md-6">
            <img src="/assets/img/logo-white.png" />x
          </div>
        </Row>
        <div className={css.FooterInfo}>
          <div className={css.FooterPhone}>
            <FontAwesomeIcon icon={faPhone} className={css.TopbarIcon} />
            <a href={`tel:88882470`}> 8888-2470</a>
          </div>
          <div className={css.FooterMail}> </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
