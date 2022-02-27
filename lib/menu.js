import axios from "axios-base";

export const getMenus = async () => {
  let data = [];
  let error;
  await axios
    .get("menu")
    .then((res) => {
      data = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { data, error };
};

export const childMenus = async (slug) => {
  let data = [];
  let error;
  await axios
    .get(`menu/childs/${slug}`)
    .then((res) => {
      data = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });
  return { menus: data, error };
};
