import { Box, Grid2, Stack, Typography } from "@mui/material";
import { getCurrentByLanAndLon } from "../services/api";
import useGet from "../hooks/useGet";

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

function Today() {
  const { data, loading, error } = useGet(getCurrentByLanAndLon, {
    lat: 50.075539,
    lon: 14.4378,
  });

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
