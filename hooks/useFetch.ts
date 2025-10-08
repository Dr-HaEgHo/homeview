import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

// You can customize this type for specific data responses
interface UseAxiosResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const useAxios = <T = any>(url: string, options?: AxiosRequestConfig): UseAxiosResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (retryCount = 3) => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios(url, options);
        setData(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        if (retryCount > 0) {
          setTimeout(() => fetchData(retryCount - 1), 1000);
        } else {
          setError(axiosError.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    },
    [url, JSON.stringify(options)]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useAxios;
