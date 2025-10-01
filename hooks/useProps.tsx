import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useProperties(page: number, limit: number, filters?: Record<string, string | number>) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    ...(filters || {}),
  });

  const { data, error, isLoading } = useSWR(`/api/props?${params}`, fetcher);

  return {
    properties: data?.data || [],
    pagination: data?.pagination || { page: 1, limit, total: 0, totalPages: 1 },
    isLoading,
    isError: !!error,
  };
}
