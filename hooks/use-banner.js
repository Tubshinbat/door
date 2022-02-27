import useSWR from "swr";

export const useBanners = () => {
  const { data, error } = useSWR(`https://cdn.metaldoor.mn/api/v1/banners`);
  return {
    banners: data,
    isLoading: !error && !data,
    error,
  };
};
