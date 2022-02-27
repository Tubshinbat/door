import axios from "axios-base";

export const getAllProducts = async (query = null) => {
  let data = [];
  let error;
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

export const getProduct = async (slug) => {
  let data, error;
  await axios
    .get(`product/s/${slug}`)
    .then((res) => {
      data = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { product: data, error };
};

export const productAdd = async (data) => {
  let result = {};
  let error;
  await axios
    .post(`product`, data)
    .then((res) => {
      result = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { result, error };
};
