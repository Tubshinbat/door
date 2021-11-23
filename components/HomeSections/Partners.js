import { Container } from "react-bootstrap";
import css from "styles/Sections/Partners.module.css";
const Partners = () => {
  return (
    <section className="parentSection">
      <Container>
        <div className={css.Logos}>
          <img src="/assets/img/logo-1.png" />
          <img src="/assets/img/logo-2.png" />
          <img src="/assets/img/logo-3.png" />
          <img src="/assets/img/logo-4.png" />
          <img src="/assets/img/logo-5.png" />
        </div>
      </Container>
    </section>
  );
};

export default Partners;
