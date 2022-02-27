import useSWR from "swr";

export const usePartners = () => {
  const { data, error } = useSWR(
    `https://cdn.metaldoor.mn/api/v1/partners?limit=5&status=true`
  );
  let partners;
  if (data) {
    partners = data.data;
  }
  return {
    partners: partners,
    isLoading: !error && !data,
    error,
  };
};
