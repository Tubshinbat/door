import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import ReactTimeAgo from "react-time-ago";

import css from "styles/Sections/News.module.css";
const News = ({ news }) => {
  return (
    <section>
      <div className="sectionHader">
        <h4
          className=" wow animate__animated animate__fadeInUp"
          data-wow-delay={`0.5s`}
        >
          Мэдээ мэдээлэл
        </h4>
        <p
          className=" wow animate__animated animate__fadeInDown"
          data-wow-delay={`0.7s`}
        >
          {" "}
          Бидний тухай сүүлийн үеийн мэдээ мэдээлэл
        </p>
      </div>

      <Container>
        <Row>
          {news &&
            news.map((el) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6  wow animate__animated animate__fadeInUp"
                data-wow-delay={`0.3s`}
                key={el.slug}
              >
                <Link href={`n/${el.slug}`}>
                  <div className={css.NewsBox}>
                    <div className={css.NewsBoxImg}>
                      <img
                        src={`https://cdn.metaldoor.mn/uploads/450/${el.pictures[0]}`}
                        className={css.NewsImg}
                      />
                    </div>
                    <div className={css.NewsInfo}>
                      <h4>{el.name}</h4>
                      <span>
                        <ReactTimeAgo date={el.createAt} locale="mn-MN" />
                      </span>
                      <p>{el.shortDetails}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default News;
