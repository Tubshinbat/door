import { Carousel } from "react-bootstrap";
import Image from "next/image";
import css from "styles/Banner.module.css";
import { useBanners } from "hooks/use-banner";
import { useEffect, useState } from "react";

const Banner = () => {
  const [bannersData, setBanner] = useState([]);
  const { banners } = useBanners();

  useEffect(() => {
    if (banners) setBanner(() => banners.data);
  }, [banners]);

  return (
    <Carousel interval={8000}>
      {bannersData.length > 0 &&
        bannersData.map((el) => (
          <Carousel.Item key={`banner_${el}`}>
            <div className={`${css.BannerBg}`}> </div>
            <div className={`${css.ImgBox}  `}>
              <img
                className={css.BannerImg}
                src={`http://localhost:8000/uploads/${el.banner}`}
              />
            </div>
            <Carousel.Caption>
              <span className={`slider__headname`}> МЕТАЛ ХААЛГА </span>
              <h3 className={`slider__name`}>{el.name}</h3>
              <p className={`slider__description`}>{el.details}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default Banner;
