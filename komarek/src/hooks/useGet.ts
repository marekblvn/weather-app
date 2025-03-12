/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from "axios";

interface UseGetResult<T extends Record<string, unknown>> {
  data: T | undefined;
  loading: boolean;
  error: string | null;
  refetch: (params?: any) => void;
}

export default function useGet<T extends Record<string, any>, P>(
  asyncCallback: (params: P) => Promise<AxiosResponse<T>>,
  initialParams: P
): UseGetResult<T> {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<P | undefined>(initialParams);

  const fetchData = useCallback(
    async (newParams?: P) => {
      setLoading(true);
      setError(null);

      try {
        const result = await asyncCallback(newParams ?? initialParams);

        setData(result.data);
        setParams(newParams ?? params);
      } catch (error) {
        setError((error as Error).message || "Error has occurred");
      } finally {
        setLoading(false);
      }
    },
    [asyncCallback, params, initialParams]
  );

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}
