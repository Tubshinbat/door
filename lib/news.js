import axios from "axios-base";

export const getAllNews = async (query = null) => {
  let data = [];
  let error;
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

export const updateView = async (slug) => {
  let data = {};
  let error;
  await axios
    .get(`news/view/${slug}`)
    .then((res) => {
      data = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { views: data, error };
};

export const getNews = async (slug) => {
  let data = {};
  let error;
  await axios
    .get(`news/s/${slug}`)
    .then((res) => {
      data = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { singleNews: data, error };
};
