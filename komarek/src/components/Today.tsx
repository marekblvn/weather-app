import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Lsi from "./Lsi";
import { getLocaleDateFormat } from "../utils/locales";

interface LocationData {
  name: string;
  localtime: string;
}

interface Props {
  readonly locationData?: LocationData;
  readonly temp?: number;
  readonly icon?: string | undefined;
  readonly lastUpdated?: string;
}

function Today({
  locationData = { name: "", localtime: "" },
  temp = 0,
  lastUpdated = "",
  icon = undefined,
}: Props) {
  const isMobileDevice = useMediaQuery("(max-width: 900px)");
  const date = new Date(locationData.localtime);
  function getUpdateTime(d: string): string {
    const date = new Date(d);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginBottom={{ xs: "16px", md: "24px" }}
    >
      <Stack direction="column" justifyContent="center">
        <Typography variant="h5" fontWeight={700} color="#a97070">
          {locationData.name}
        </Typography>
        <Typography variant="subtitle1" color="#a97070">
          {getLocaleDateFormat(date)}
        </Typography>
      </Stack>
      <Stack direction="column" justifyContent="center" alignItems="end">
        <Stack direction="row" alignItems="center">
          <Box
            width={{ xs: "48px", sm: "64px", lg: "72px" }}
            height={{ xs: "48px", sm: "64px", lg: "72px" }}
          >
            <img
              src={icon}
              alt=""
              height="100%"
              width="100%"
              style={{
                imageRendering: "crisp-edges",
                userSelect: "none",
                imageResolution: "from-image",
              }}
            />
          </Box>
          <Typography
            variant={isMobileDevice ? "h5" : "h4"}
            fontWeight={700}
            color="#a97070"
          >
            {temp.toFixed(0)} °C
          </Typography>
        </Stack>
        <Typography
          variant="caption"
          fontSize={{ xs: "10px", md: "12px" }}
          color="#d0b0b0"
        >
          <Lsi lsi={{ en: "Last updated at", cs: "Aktualizováno v" }} />{" "}
          {getUpdateTime(lastUpdated)}
        </Typography>
      </Stack>
    </Box>
  );
}

export default Today;
