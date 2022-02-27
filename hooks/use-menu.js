import useSWR from "swr";

export const useMenus = () => {
  const { data, error } = useSWR(`https://cdn.metaldoor.mn/api/v1/menu`);
  return {
    menus: data,
    isLoading: !error && !data,
    error,
  };
};
