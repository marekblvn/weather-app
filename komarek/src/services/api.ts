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
  days: number;
}
//TODO: Implement getting geolocation from browser
export async function getForecast(
  params: CurrentByLanAndLonParams
): Promise<AxiosResponse<Record<string, any>>> {
  const response = await apiInstance.get("/forecast.json", {
    params: {
      q: `${params.lat},${params.lon}`,
      days: params.days,
      aqi: "no",
      alerts: "no",
    },
  });
  return response;
}
