import { usePartners } from "hooks/use-banners";
import { Container } from "react-bootstrap";
import css from "styles/Sections/Partners.module.css";
const Partners = () => {
  const { partners } = usePartners();

  return (
    <section className="parentSection">
      <Container>
        <div className={css.Logos}>
          {partners &&
            partners.map((el) => (
              <a href={el.link}>
                <img src={`http://localhost:8000/uploads/${el.logo}`} />
              </a>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;
