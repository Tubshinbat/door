import css from "styles/Footerbar.module.css";

const FooterBar = () => {
  return (
    <div className={`${css.FooterBar} `}>
      <span
        className="wow animate__animated animate__fadeInDown"
        data-wow-delay={`1s`}
      >
        © Бүх эрх хуулиар хамгаалагдсан. 2021 он
      </span>
    </div>
  );
};

export default FooterBar;
