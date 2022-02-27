import axios from "axios-base";

export const orderAdd = async (data) => {
  let result = {};
  let error;
  await axios
    .post(`orders`, data)
    .then((res) => {
      result = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { result, error };
};
