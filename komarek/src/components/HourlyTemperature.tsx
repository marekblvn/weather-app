import { Box, Stack, Typography } from "@mui/material";
interface Props {
  readonly temperatureData?: Array<Record<string, any>>;
}

function HourlyTemperature({ temperatureData = [] }: Props) {
  const data = temperatureData.map((entry) => {
    const date = new Date(0);
    date.setUTCSeconds(entry.time_epoch);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const time = `${hours}:${minutes}`;

    return {
      key: entry.time_epoch,
      time,
      temperature: entry.temp_c,
      icon: entry.condition.icon,
    };
  });
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent={{ xs: "start" }}
      padding="2px 8px"
      sx={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollbarWidth: "thin",
        scrollBehavior: "smooth",
        WebkitOverflowScrolling: "touch",
      }}
      marginBottom={{ xs: "4px", sm: "12px" }}
      paddingBottom="8px"
    >
      {data.map((entry) => {
        return (
          <Stack
            key={entry.key}
            direction="column"
            alignItems="center"
            margin="0 8px"
            padding="12px"
            borderRadius={3}
            sx={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <Stack direction="row" alignItems="center" spacing="4px">
              <img src={entry.icon} alt="" width="24px" height="24px" />
              <Typography variant="subtitle2" fontWeight={800} color="#804D4D">
                {entry.temperature.toFixed(0)} °C
              </Typography>
            </Stack>
            <Typography variant="caption" color="#A97070" fontWeight={600}>
              {entry.time}
            </Typography>
          </Stack>
        );
      })}
    </Box>
  );
}

export default HourlyTemperature;
