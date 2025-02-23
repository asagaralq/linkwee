import { useQuery } from "@tanstack/react-query"; // ✅ Correct import
import apiClient from "../api/apiClient";

export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls"], // ✅ Query key should be an array
    queryFn: async () => {
      try {
        const { data } = await apiClient.get("/api/urls/myurls", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return data;
      } catch (error) {
        onError?.(error);
        throw error;
      }
    },
    select: (data) =>
      data?.sort(
        (a, b) =>
          new Date(b.createdDate).getTime() -
          new Date(a.createdDate).getTime()
      ) ?? [],
    onError,
    staleTime: 5000,
  });
};

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick"], // ✅ Query key should be an array
    queryFn: async () => {
      try {
        const { data } = await apiClient.get(
          "/api/urls/totalClicks?startDate=2024-01-01&endDate=2025-12-31",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return data;
      } catch (error) {
        onError?.(error);
        throw error;
      }
    },
    select: (data) =>
      Object.entries(data ?? {}).map(([clickDate, count]) => ({
        clickDate,
        count,
      })),
    onError,
    staleTime: 5000,
  });
};
