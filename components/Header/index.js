import Image from "next/image";
import Link from "next/link";
import css from "styles/Header.module.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  useEffect(() => {
    window.onscroll = () => {
      let header = document.querySelector(".myHeader");
      let sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        header.classList.add(`${css.Sticky}`);
        header.classList.add("animate__animated");
        header.classList.add("animate__slideInDown");
        header.classList.add("animate__delay-0.2s");
      } else {
        header.classList.remove(`${css.Sticky}`);
        header.classList.remove("animate__animated");
        header.classList.remove("animate__slideInDown");
        header.classList.remove("animate__delay-0.2s");
      }
    };
  }, []);

  return (
    <>
      <header>
        <Container>
          <div className={css.Topbar}>
            <div className={css.Contacts}>
              <div className={css.Contact}>
                <FontAwesomeIcon icon={faPhone} className={css.TopbarIcon} />
                <a href={`tel:88882470`}> (+976) 8888-2470</a>
              </div>
              <div className={css.Contact}>
                <FontAwesomeIcon icon={faEnvelope} className={css.TopbarIcon} />
                <a href={`mailto:info@domain.mn`}> info@domain.mn</a>
              </div>
            </div>
            <div className={css.Socials}>
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
        </Container>
      </header>
      <Navbar expand="lg" className={`myHeader ${css.Header}`}>
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <div className={css.Logo}>
              <Image
                src="/assets/img/logo-white.png"
                className={css.LogoImg}
                layout="fill"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <ul className={css.Menu}>
                <li className="nav-item">
                  <Link href="/">Нүүр хуудас </Link>
                </li>
                <li className="nav-item">
                  <Link href="/products"> Бүтээгдэхүүн </Link>
                </li>
                <li className="nav-item">
                  <Link href="/news"> Мэдээ мэдээлэл</Link>
                </li>
                <li className="nav-item">
                  <Link href="/about"> Бидний тухай</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact"> Холбоо барих </Link>
                </li>
                <li className="nav-item">
                  <Link href="/order">
                    <a className={css.OrderBtn}> Захиалга өгөх </a>
                  </Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
