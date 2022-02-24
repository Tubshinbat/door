import axios from "axios-base";

export const getAllProducts = async (query = null) => {
  let data, error;
  await axios
    .get(`product?${query}`)
    .then((res) => {
      data = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { products: data, error };
};
