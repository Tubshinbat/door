import Image from "next/image";
import css from "styles/Sections/Welcome.module.css";

const Welcome = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={css.About}>
              <span> Тавтай морил </span>
              <h3>Монгол дахь цорын ганц албан ёсны дистрибьютор</h3>
              <p className={css.Top}>
                Бүх төрлийн автомат хаалга, зогсоолын автомат систем,
                хамгаалалтын ган хаалга
              </p>
              <p>
                ПАЗЛХАУС ХХК нь ОХУ болон Европын улс орнуудаас DOORHAN,
                ALUTECH, RYTERNA, FAAC, BULDOORS брэндүүдийн бүр төрлийн автомат
                хаалгануудыг Монгол орныхоо байгаль цаг уурын онцлог, барилгын
                стандарт, хэрэглэгчдийн хэрэгцээ шаардлагад бүрэн нийцүүлэн
                үйлдвэрлүүлэн нийлүүлэхийн зэрэгцээ угсралт суурилуулалтыг
                үйлдвэрлэгчээс тогтоосон стандартын дагуу мэргэжлийн өндөр
                түвшинд гүйцэтгэж байна.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={css.AboutImg}>
              <Image src="/assets/img/about.jpg" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
