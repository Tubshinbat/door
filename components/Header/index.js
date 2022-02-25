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
import base from "base";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useInfo, useSocials } from "hooks/use-info";
import { useMenus } from "hooks/use-menu";

const Header = () => {
  const [infoData, setInfo] = useState({});
  const [slinks, setSlinks] = useState([]);
  const [dataMenus, setDataMenus] = useState([]);
  const { info } = useInfo();
  const { socialLinks } = useSocials();
  const { menus } = useMenus();

  useEffect(() => {
    if (menus) {
      setDataMenus(menus.data);
    }
  }, [menus]);

  useEffect(() => {
    if (info) {
      setInfo(info.data);
    }
  }, [info]);

  useEffect(() => {
    if (socialLinks) {
      setSlinks(socialLinks.data);
    }
  }, [socialLinks]);

  useEffect(() => {
    window.onscroll = () => {
      let header = document.querySelector(".myHeader");
      let sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add(`${css.Sticky}`);
      } else {
        header.classList.remove(`${css.Sticky}`);
      }
    };
  }, []);

  const renderCategories = (categories, child = false) => {
    let myCategories = [];
    categories &&
      categories.map((el) => {
        myCategories.push(
          <li key={el._id} className="nav-item">
            {!el.isDirect && !el.model && (
              <Link href={`/page/${el.slug}`}>
                <a
                  className={child ? `` : `effect  slide-down `}
                  data-effect={el.name}
                >
                  {el.name}
                </a>
              </Link>
            )}
            {el.isDirect && (
              <a
                href={el.direct}
                className={child ? `` : `effect  slide-down `}
                data-effect={el.name}
              >
                {el.name}
              </a>
            )}
            {el.model && (
              <Link href={`/${el.model}`}>
                <a
                  className={child ? `` : `effect  slide-down `}
                  data-effect={el.name}
                >
                  {el.name}
                </a>
              </Link>
            )}
          </li>
        );
      });

    return myCategories;
  };

  return (
    <>
      <header>
        <Container>
          <div className={css.Topbar}>
            <div className={css.Contacts}>
              <div className={css.Contact}>
                <FontAwesomeIcon icon={faPhone} className={css.TopbarIcon} />
                <a href={`tel:${infoData.phone}`}> (+976) {infoData.phone}</a>
              </div>
              <div className={css.Contact}>
                <FontAwesomeIcon icon={faEnvelope} className={css.TopbarIcon} />
                <a href={`mailto:${infoData.email}`}> {infoData.email}</a>
              </div>
            </div>
            <div className={css.Socials}>
              {slinks.map((el) => (
                <a href={el.link} key={el.link}>
                  <FontAwesomeIcon
                    icon={
                      (el.name === "facebook" && faFacebookF) ||
                      (el.name === "twitter" && faTwitter) ||
                      (el.name === "youtube" && faYoutube)
                    }
                    className={css.Icons}
                  />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </header>
      <Navbar expand="lg" className={`myHeader ${css.Header}`}>
        <Container>
          <Navbar.Brand href="/">
            <div className={css.Logo}>
              <img
                src={`http://localhost:8000/uploads/${infoData.whiteLogo}`}
                className={css.LogoImg}
                layout="fill"
              />

              <img
                src={`http://localhost:8000/uploads/${infoData.logo}`}
                className={`${css.LogoImg} ${css.ColorLogo}`}
                layout="fill"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <ul className={css.Menu}>
                <li className="nav-item" key="menu_1">
                  <Link href={base.baseUrl}>Нүүр хуудас </Link>
                </li>
                {renderCategories(dataMenus)}
                <li className="nav-item">
                  <Link href="/contact"> Холбоо барих </Link>
                </li>
                <li className="nav-item" key="menu_2">
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
