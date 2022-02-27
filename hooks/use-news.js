import useSWR from "swr";

export const useNews = (initData, query) => {
  let news;
  const { data, error } = useSWR(`http://localhost:8000/api/v1/news?${query}`, {
    initialData: initData,
  });

  if (data) {
    news = data.data;
  }

  return {
    newsData: news,
    isLoading: !error && !news,
    error,
  };
};

export const useGetNews = (initData, slug) => {
  let news = {};
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/news/s/${slug}`,
    {
      initialData: initData,
    }
  );

  if (data) news = data.data;
  return {
    newsData: product,
    isLoading: !error && !product,
    error,
  };
};
