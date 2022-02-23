import useSWR from "swr";

export const useBanners = () => {
  const { data, error } = useSWR(`http://localhost:8000/api/v1/banners`);
  return {
    banners: data,
    isLoading: !error && !data,
    error,
  };
};
