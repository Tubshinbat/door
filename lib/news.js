import axios from "axios-base";

export const getAllNews = async (query = null) => {
  let data, error;
  await axios
    .get(`news?${query}`)
    .then((res) => {
      data = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { news: data, error };
};
