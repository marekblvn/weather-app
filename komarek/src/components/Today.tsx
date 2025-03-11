import { Box, Grid2, Stack, Typography } from "@mui/material";
import Lsi from "./Lsi";

const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
  function formatDate(d: string): string {
    const date = new Date(d);
    const day = daysShort[date.getDay()];
    const dayNum = date.getDate();
    const month = months[date.getMonth()];
    return `${day}, ${month} ${dayNum}`;
  }

  function getUpdateTime(d: string): string {
    const date = new Date(d);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <Box width="100%" height="100%" marginBottom="8px">
      <Grid2 container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding="8px"
          width="100%"
        >
          <Stack spacing="8px" alignItems="start" justifyContent="center">
            <Typography variant="h5">{locationData.name}</Typography>
            <Typography variant="subtitle2">
              {formatDate(locationData.localtime)}
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="end">
            <Stack direction="row" alignItems="center" spacing="4px">
              <Box alignItems="center" display="flex">
                <img
                  src={icon}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{
                    imageRendering: "crisp-edges",
                    userSelect: "none",
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                fontWeight={700}
                style={{ userSelect: "none" }}
              >
                {temp.toFixed(0)} °C
              </Typography>
            </Stack>
            <Typography
              variant="caption"
              fontSize="10px"
              fontWeight={200}
              color="#999999"
            >
              <Lsi lsi={{ en: "Last updated at", cs: "Aktualizováno v" }} />{" "}
              {getUpdateTime(lastUpdated)}
            </Typography>
          </Stack>
        </Stack>
      </Grid2>
    </Box>
  );
}

export default Today;
