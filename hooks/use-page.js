import useSWR from "swr";
import base from "base";

export const usePage = (slug) => {
  let page = {};
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/pages/slug/${slug}`
  );
  if (data) {
    page = data.data;
  }

  return {
    page,
    isLoading: !error && !page,
    error,
  };
};
