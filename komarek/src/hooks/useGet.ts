import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from "axios";

interface UseGetResult<T extends Record<string, any>> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (params?: any) => void;
}

interface CachedData<T> {
  data: T;
  timestamp: number;
}

export default function useGet<T extends Record<string, any>, P>(
  asyncCallback: (params: P) => Promise<AxiosResponse<T>>,
  initialParams: P
): UseGetResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<P | undefined>(initialParams);

  const CACHE_EXPIRATION_MS =
    parseInt(import.meta.env.VITE_CACHE_EXP) * 60 * 1_000; // expiration in ms

  const fetchData = useCallback(
    async (newParams?: P) => {
      setLoading(true);
      setError(null);

      try {
        const cacheKey = asyncCallback.name;
        const cachedDataString = localStorage.getItem(cacheKey);
        const cachedData: CachedData<any> | null = cachedDataString
          ? JSON.parse(cachedDataString)
          : null;
        if (
          cachedData &&
          Date.now() - cachedData.timestamp < CACHE_EXPIRATION_MS
        ) {
          setData(cachedData.data);
        } else {
          const result = await asyncCallback(newParams ?? initialParams);
          setData(result.data);
          setParams(newParams ?? params);
          const newCache: CachedData<typeof result.data> = {
            data: result.data,
            timestamp: Date.now(),
          };
          localStorage.setItem(cacheKey, JSON.stringify(newCache));
        }
      } catch (error) {
        setError((error as Error).message || "Error has occurred");
      } finally {
        setLoading(false);
      }
    },
    [asyncCallback, params, initialParams, CACHE_EXPIRATION_MS]
  );

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}
