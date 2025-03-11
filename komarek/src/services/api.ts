import axios, { AxiosResponse } from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY,
  },
});

interface CurrentByLanAndLonParams {
  lat: number;
  lon: number;
}

export async function getCurrentByLanAndLon(
  params: CurrentByLanAndLonParams
): Promise<AxiosResponse<Record<string, any>>> {
  const response = await apiInstance.get("/current.json", {
    params: { q: `${params.lat},${params.lon}` },
  });
  return response;
}
