import useSWR from "swr";

export const useProduct = (initData, query) => {
  let products;
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/product?${query}`,
    {
      initialData: initData,
    }
  );

  if (data) {
    products = data.data;
  }

  return {
    useProducts: products,
    isLoading: !error && !products,
    error,
  };
};

export const useGetProduct = (initData, slug) => {
  let product = {};
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/product/s/${slug}`,
    {
      initialData: initData,
    }
  );

  if (data) product = data.data;
  return {
    productData: product,
    isLoading: !error && !product,
    error,
  };
};
