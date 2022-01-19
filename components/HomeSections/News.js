import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import css from "styles/Sections/News.module.css";
const News = () => {
  return (
    <section>
      <div className="sectionHader">
        <h4>Мэдээ мэдээлэл</h4>
        <p> Бидний тухай сүүлийн үеийн мэдээ мэдээлэл</p>
      </div>

      <Container>
        <Row>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <Link href="/news-1">
              <div className={css.NewsBox}>
                <div className={css.NewsBoxImg}>
                  <img src="/assets/img/news-1.jpg" className={css.NewsImg} />
                </div>
                <div className={css.NewsInfo}>
                  <h4>
                    Аюулгүй ажиллагаа удаан эдэлгээгээрээ шалгарсан автомат
                    хаалга
                  </h4>
                  <span> 13 хонгийн өмнө </span>
                  <p>
                    Аюулгүй ажиллагаа удаан эдэлгээгээрээ шалгарсан #Алютех
                    брэндийн автомат хаалгануудыг өнгө загвар хэмжээний өргөн
                    сонголтоор Монгол дахь цорын ганц албан ёсны дистрибьютор
                    болох #Пазлхаус компаниас худалдан аваарай
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <Link href="/news-2">
              <div className={css.NewsBox}>
                <div className={css.NewsBoxImg}>
                  <img src="/assets/img/news-2.jpg" className={css.NewsImg} />
                </div>
                <div className={css.NewsInfo}>
                  <h4>
                    Автомашины гаражны хаалгыг гадна хамгаалалтын хаалгатайгаа
                    өнгө загвар хослуулан авах боломжтой.
                  </h4>
                  <span> 13 хонгийн өмнө </span>
                  <p>
                    Автомашины гаражны хаалгыг гадна хамгаалалтын хаалгатайгаа
                    өнгө загвар хослуулан авах боломжтой. #Alutech, #Ryterna,
                    #Doorhan 3 брэндийн автомат хаалга #Бульдорсбрэндийн
                    хамгаалалтын ган хаалгануудыг албан ёсны дистрибьютер
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <Link href="/news-1">
              <div className={css.NewsBox}>
                <div className={css.NewsBoxImg}>
                  <img src="/assets/img/news-3.jpg" className={css.NewsImg} />
                </div>
                <div className={css.NewsInfo}>
                  <h4>Угсралт суурилуулалтын ажилтан ажилд авна</h4>
                  <span> 13 хонгийн өмнө </span>
                  <p>
                    Гүйцэтгэх үндсэн үүрэг : Бүх төрлийн автомат болон бусад
                    төрөл бүрийн хаалганы угсралт суурилуулалт хийж, засвар
                    үйлчилгээний мэргэжлийн үйлчилгээ үзүүлэх Ажлын байранд
                    тавигдах шаардлага : • Эерэг зөв хандлагатай, зөв…
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default News;
