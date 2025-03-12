/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import getUserGeolocation from "./geolocation";

const apiInstance = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY,
  },
});

const CACHE_EXPIRY = parseInt(import.meta.env.VITE_CACHE_EXPIRY) * 60 * 1_000;
const LOCATION_TOLERACE = 0.01;

async function callGetForecast(params: {
  lat: number;
  lon: number;
  days: number;
}) {
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

export async function getForecast(params: {
  days: number;
}): Promise<AxiosResponse<Record<string, any>>> {
  const CACHE_KEY = "forecastCache";
  const userLocation = await getUserGeolocation();
  const cachedData = localStorage.getItem(CACHE_KEY);

  if (cachedData) {
    const { timestamp, location, data } = JSON.parse(cachedData);
    const isCacheValid = Date.now() - timestamp < CACHE_EXPIRY;
    const isSameLocation =
      Math.abs(location.lat - userLocation.lat) < LOCATION_TOLERACE &&
      Math.abs(location.lon - userLocation.lon) < LOCATION_TOLERACE;

    if (isCacheValid && isSameLocation) {
      return data;
    }
  }

  try {
    const response = callGetForecast({
      lat: userLocation.lat,
      lon: userLocation.lon,
      days: params.days,
    });

    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        location: userLocation,
        data: await response,
      })
    );
    return response;
  } catch (error) {
    throw new Error(`Failed to fetch forecast: ${error}`);
  }
}
