import { Grid2 } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import ScaleIcon from "@mui/icons-material/Scale";
import WaterIcon from "@mui/icons-material/Water";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WindDirectionIcon from "./WindDirectionIcon";
import DewPointIcon from "@mui/icons-material/WaterDropOutlined";
import TemperatureIcon from "@mui/icons-material/DeviceThermostatOutlined";
import useIsMobileDevice from "../hooks/useIsMobileDevice";
import DetailCard from "./DetailCard";
import Lsi from "./Lsi";

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
    <Grid2
      container
      size={12}
      spacing="6px"
      rowSpacing={isMobileDevice ? "12px" : "32px"}
    >
      {/* Dew point */}
      <Grid2 size={isMobileDevice ? 12 : 6}>
        <DetailCard
          label={<Lsi lsi={{ en: "Feels like", cs: "Pocit. teplota" }} />}
          icon={<TemperatureIcon fontSize="small" />}
          formattedValue={feelslike_c ? `${feelslike_c} °C` : undefined}
        />
      </Grid2>
      {/* Humidity */}
      <Grid2 size={isMobileDevice ? 12 : 6}>
        <DetailCard
          label={<Lsi lsi={{ en: "Humidity", cs: "Vlhkost" }} />}
          icon={<WaterDropIcon fontSize="small" style={{ color: "#3EA4F0" }} />}
          formattedValue={humidity ? `${humidity} %` : undefined}
        />
      </Grid2>
      {/* Air Pressure */}
      <Grid2 size={isMobileDevice ? 12 : 6}>
        <DetailCard
          label={<Lsi lsi={{ en: "Air Pressure", cs: "Tlak vzduchu" }} />}
          icon={<ScaleIcon fontSize="small" />}
          formattedValue={pressure_mb ? `${pressure_mb} hPa` : undefined}
        />
      </Grid2>
      {/* Wind Speed */}
      <Grid2 size={isMobileDevice ? 12 : 6}>
        <DetailCard
          label={<Lsi lsi={{ en: "Wind Speed", cs: "Rychlost větru" }} />}
          icon={<AirIcon fontSize="small" />}
          formattedValue={wind_kph ? `${kmphToMps(wind_kph)} m/s` : undefined}
        />
      </Grid2>
      {/* Wind Direction */}
      <Grid2 size={isMobileDevice ? 12 : 6}>
        <WindDirectionIcon degrees={wind_degree ?? 0} />
      </Grid2>
      {/* Precipation */}
      <Grid2 size={isMobileDevice ? 12 : 6}>
        <DetailCard
          label={<Lsi lsi={{ en: "Precipiation", cs: "Srážky" }} />}
          icon={<WaterIcon fontSize="small" style={{ color: "#89CFF0" }} />}
          formattedValue={precip_mm ? `${precip_mm} mm` : undefined}
        />
      </Grid2>
      {/* UV Index */}
      <Grid2 size={isMobileDevice ? 12 : 6}>
        <DetailCard
          label={<Lsi lsi={{ en: "UV Index", cs: "UV Index" }} />}
          icon={
            <WbSunnyIcon
              fontSize="small"
              style={{ color: getUvIndexColor(0) }}
            />
          }
          formattedValue={uv ? `${uv}` : undefined}
        />
      </Grid2>
      {/* Dew point */}
      <Grid2 size={isMobileDevice ? 12 : 6}>
        <DetailCard
          label={<Lsi lsi={{ en: "Dew Point", cs: "Rosný bod" }} />}
          icon={<DewPointIcon fontSize="small" />}
          formattedValue={dewpoint_c ? `${dewpoint_c} °C` : undefined}
        />
      </Grid2>
    </Grid2>
  );
}

export default Details;
