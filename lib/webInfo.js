import axios from "axios-base";

export const getInfo = async () => {
  const webInfo = await axios
    .get("webinfo")
    .then((res) => res.data.data)
    .catch((error) => error.status);

  return webInfo;
};

export const getPgMenus = async () => {
  const menus = await axios
    .get("menu")
    .then((res) => res.data.data)
    .catch((err) => err.status);
  return menus;
};
