import axios from "axios-base";

export const contactAdd = async (data) => {
  let result = {};
  let error;
  await axios
    .post(`contacts`, data)
    .then((res) => {
      result = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { result, error };
};
