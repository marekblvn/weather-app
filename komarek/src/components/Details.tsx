import { Grid2, List } from "@mui/material";
import HumidityIcon from "@mui/icons-material/WaterDrop";
import WindSpeedIcon from "@mui/icons-material/Air";
import AirPressureIcon from "@mui/icons-material/Scale";
import WaterIcon from "@mui/icons-material/Water";
import UvIndexIcon from "@mui/icons-material/WbSunny";
import DewPointIcon from "@mui/icons-material/WaterDropOutlined";
import TemperatureIcon from "@mui/icons-material/DeviceThermostatOutlined";
import useIsMobileDevice from "../hooks/useIsMobileDevice";
import DetailItem from "./DetailItem";
import Lsi from "./Lsi";
import WindDirectionItem from "./WindDirectionItem";

interface WeatherData extends Record<string, number | string | undefined> {
  wind_kph?: number;
  wind_degree?: number;
  precip_mm?: number;
  humidity?: number;
  feelslike_c?: number;
  dewpoint_c?: number;
  uv?: number;
  pressure_mb?: number;
}

interface Props {
  readonly data?: WeatherData;
}

function Details({ data = {} }: Props) {
  const isMobileDevice = useIsMobileDevice();
  const {
    humidity,
    wind_degree,
    wind_kph,
    dewpoint_c,
    precip_mm,
    feelslike_c,
    uv,
    pressure_mb,
  } = data;
  function kmphToMps(kmph: number): string {
    return ((kmph * 1000) / 3600).toFixed(1);
  }
  function getUvIndexColor(uvIndex: number): string {
    if (uvIndex < 3) {
      return "#228B22";
    } else if (uvIndex < 6) {
      return "#FFBB00";
    } else if (uvIndex < 8) {
      return "#FF7721";
    } else if (uvIndex < 11) {
      return "#FF0000";
    } else {
      return "#BF40BF";
    }
  }
  return (
    <div>
      <Grid2
        container
        columns={{ xs: 12, lg: 16 }}
        spacing={{ xs: "2px", sm: "4px", md: "8px", lg: "12px" }}
      >
        <DetailItem
          label={<Lsi lsi={{ en: "Feels like", cs: "Pocit. teplota" }} />}
          icon={<TemperatureIcon sx={{ color: "#a97070" }} />}
          formattedValue={
            feelslike_c === undefined ? "—" : `${feelslike_c.toFixed(0)} °C`
          }
        />
        <DetailItem
          label={<Lsi lsi={{ en: "Humidity", cs: "Vlhkost" }} />}
          icon={<HumidityIcon sx={{ color: "#a97070" }} />}
          formattedValue={humidity === undefined ? "—" : `${humidity} %`}
        />
        <DetailItem
          label={<Lsi lsi={{ en: "Precipiation", cs: "Srážky" }} />}
          icon={<WaterIcon sx={{ color: "#a97070" }} />}
          formattedValue={
            precip_mm === undefined ? "—" : `${precip_mm.toFixed(0)} mm`
          }
        />
        <DetailItem
          label={<Lsi lsi={{ en: "Air Pressure", cs: "Tlak vzduchu" }} />}
          icon={<AirPressureIcon sx={{ color: "#a97070" }} />}
          formattedValue={
            pressure_mb === undefined ? "—" : `${pressure_mb} hPa`
          }
        />
        <DetailItem
          label={<Lsi lsi={{ en: "Wind Speed", cs: "Rychl. větru" }} />}
          icon={<WindSpeedIcon sx={{ color: "#a97070" }} />}
          formattedValue={
            wind_kph === undefined ? "—" : `${kmphToMps(wind_kph)} m/s`
          }
        />
        <WindDirectionItem degrees={wind_degree ?? 0} />
        <DetailItem
          label={<Lsi lsi={{ en: "Dew Point", cs: "Rosný bod" }} />}
          icon={<DewPointIcon sx={{ color: "#a97070" }} />}
          formattedValue={
            dewpoint_c === undefined ? "—" : `${dewpoint_c.toFixed(0)} °C`
          }
        />
        <DetailItem
          label={<Lsi lsi={{ en: "UV Index", cs: "UV index" }} />}
          icon={<UvIndexIcon sx={{ color: "#a97070" }} />}
          formattedValue={uv === undefined ? "—" : `${uv.toFixed(1)}`}
        />
      </Grid2>
    </div>
  );
}

export default Details;
