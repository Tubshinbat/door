import Image from "next/image";
import Link from "next/link";
import css from "styles/Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="container">
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
        <div className={css.Header}>
          <div className={css.Logo}>
            <Image
              src="/assets/img/logo.png"
              className={css.LogoImg}
              layout="fill"
            />
          </div>

          <ul className={css.Menu}>
            <li>
              <a href="/">Нүүр хуудас </a>
            </li>
            <li>
              <Link href="/products"> Бүтээгдэхүүн </Link>
            </li>
            <li>
              <Link href="/news"> Мэдээ мэдээлэл</Link>
            </li>
            <li>
              <Link href="/about"> Бидний тухай</Link>
            </li>
            <li>
              <Link href="/contact"> Холбоо барих </Link>
            </li>
            <li>
              <Link href="/order">
                <a className={css.OrderBtn}> Захиалга өгөх </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
