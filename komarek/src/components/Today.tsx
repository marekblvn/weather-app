import { Box, Grid2, Icon, Stack, Typography } from "@mui/material";

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

const data = {
  location: {
    name: "Prague",
    region: "Hlavni mesto Praha",
    country: "Czech Republic",
    lat: 50.083,
    lon: 14.467,
    tz_id: "Europe/Prague",
    localtime_epoch: 1741650166,
    localtime: "2025-03-11 00:42",
  },
  current: {
    last_updated_epoch: 1741649400,
    last_updated: "2025-03-11 00:30",
    temp_c: 10.2,
    temp_f: 50.4,
    is_day: 0,
    condition: {
      text: "Light rain",
      icon: "//cdn.weatherapi.com/weather/64x64/night/296.png",
      code: 1183,
    },
    wind_mph: 8.9,
    wind_kph: 14.4,
    wind_degree: 254,
    wind_dir: "WSW",
    pressure_mb: 1001,
    pressure_in: 29.56,
    precip_mm: 0,
    precip_in: 0,
    humidity: 71,
    cloud: 0,
    feelslike_c: 8.2,
    feelslike_f: 46.8,
    windchill_c: 8.2,
    windchill_f: 46.8,
    heatindex_c: 10.2,
    heatindex_f: 50.3,
    dewpoint_c: 7,
    dewpoint_f: 44.5,
    vis_km: 10,
    vis_miles: 6,
    uv: 0,
    gust_mph: 14.2,
    gust_kph: 22.9,
  },
};

const loading = false;
const error = null;

function Today() {
  //   const { data, loading, error, refetch } = useGet(getCurrentByLanAndLon, {
  //     lat: 50.075539,
  //     lon: 14.4378,
  //   });

  function formatDate(d: string) {
    const date = new Date(d);
    const day = daysShort[date.getDay()];
    const dayNum = date.getDate();
    const month = months[date.getMonth()];
    return `${day}, ${month} ${dayNum}`;
  }

  return (
    <Box width="100%" height="100%">
      {loading && <p>loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <Grid2 container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            padding="8px"
            width="100%"
          >
            <Stack>
              <Typography variant="h6">{data.location.name}</Typography>
              <Typography variant="subtitle2">
                {formatDate(data.location.localtime)}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing="12px">
              <Box alignItems="center" display="flex">
                <p>Icon</p>
              </Box>
              <Typography variant="h5" fontWeight={700}>
                {data.current.temp_c.toFixed(0)} °C
              </Typography>
            </Stack>
          </Stack>
        </Grid2>
      )}
    </Box>
  );
}

export default Today;
