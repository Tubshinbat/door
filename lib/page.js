import axios from "axios-base";

export const getPages = async (query = null) => {
  let pages = [];
  let error;
  await axios
    .get("pages?" + query)
    .then((res) => {
      pages = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { pages, error };
};

export const getPage = async (slug) => {
  let page = {};
  let error;

  await axios
    .get("pages/slug/" + slug)
    .then((res) => {
      page = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { page, error };
};

export const getMenu = async (slug) => {
  let menuData = {};
  let error;

  await axios
    .get("menu/slug/" + slug)
    .then((res) => {
      menuData = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { menuData, error };
};
