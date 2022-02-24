import PageHead from "components/Breadcrumbs";
import Header from "components/Header";
import Head from "next/head";

const Product = () => {
  return (
    <>
      <Head>
        <title>
          МЕТАЛ ХААЛГА - METAL DOOR АВТОМАТ ҮЙЛДВЭР БОЛОН АЛБАН БАЙГУУЛГЫН
          ЗОРИУЛТАТАЙ ХААЛГАНЫ ТӨРӨЛЖСӨН ХУДАЛДАА
        </title>
        <meta
          name="description"
          content={`Үйлдвэрийн автомат хаалга, автомат хаалга, албан байгууллагын автомат хаалга, хаалга, бүрэн автомат хаалга, мэдрэмжтэй автомат хаалга, хаалганы худалдаа, хаалганы засвар үйлчилгээ, угсралт суурилуулалт`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHead />
    </>
  );
};

export default Product;
