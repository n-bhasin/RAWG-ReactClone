import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestconfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, seterror] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestconfig,
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          seterror(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;
