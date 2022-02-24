import axios from "axios-base";

export const getInfo = async () => {
  let info, err;
  await axios
    .get("webinfo")
    .then((res) => {
      info = res.data.data;
    })
    .catch((error) => {
      err = error.status;
    });

  return { info, err };
};

export const getPgMenus = async () => {
  const menus = await axios
    .get("menu")
    .then((res) => res.data.data)
    .catch((err) => err.status);
  return menus;
};
