import useSWR from "swr";
import base from "base";

export const useInfo = () => {
  const { data, error } = useSWR(`http://localhost:8000/api/v1/webinfo`);
  return {
    info: data,
    isLoading: !error && !data,
    error,
  };
};

export const useChangeInfo = () => {
  const { data, error } = useSWR(`http://localhost:8000/api/v1/webinfo`);
  let info = {};
  if (data) {
    info = data.data;
  }
  return {
    info,
    isLoading: !error && !data,
    error,
  };
};

export const useSocials = () => {
  const { data, error } = useSWR(`http://localhost:8000/api/v1/slinks`);
  return {
    socialLinks: data,
    isLoading: !error && !data,
    error,
  };
};
