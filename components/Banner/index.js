import { Carousel } from "react-bootstrap";
import Image from "next/image";
import css from "styles/Banner.module.css";

const Banner = () => {
  return (
    <Carousel interval={8000}>
      <Carousel.Item>
        <div className={css.BannerBg}> </div>
        <div className={css.ImgBox}>
          <Image
            className={css.BannerImg}
            src="/assets/img/banner-1.jpg"
            layout="fill"
          />
        </div>
        <Carousel.Caption>
          <span> Компанийн нэр </span>
          <h3>Бүх төрлийн хаалганы худалдаа</h3>
          <p>
            Манайх Европ болон ОХУ –аас, ALUTECH, RYTERNA, FAAC, DOORHAN,
            BULDOORS брэндүүдийн бүх төрлийн автомат хаалгануудыг оруулж ирж
            байна.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={css.BannerBg}> </div>
        <div className={css.ImgBox}>
          <Image
            className={css.BannerImg}
            src="/assets/img/banner-2.jpg"
            alt="First slide"
            layout="fill"
          />
        </div>
        <Carousel.Caption>
          <span> Компанийн нэр </span>
          <h3>Бүх төрлийн автомат хаалганы худалдаа</h3>
          <p>
            Манайх Европ болон ОХУ –аас, ALUTECH, RYTERNA, FAAC, DOORHAN,
            BULDOORS брэндүүдийн бүх төрлийн автомат хаалгануудыг оруулж ирж
            байна.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
