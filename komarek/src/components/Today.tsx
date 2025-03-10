import { Box, Grid2, Icon, Stack, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useEffect } from "react";

const daysShort = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"];
const months = [
  "Ledna",
  "Února",
  "Března",
  "Dubna",
  "Května",
  "Června",
  "Července",
  "Srpna",
  "Září",
  "Října",
  "Listopadu",
  "Prosince",
];

function Today() {
  const today = new Date();
  const dayName = daysShort[today.getDay()];
  const day = String(today.getDate()).padStart(2, "0");
  const monthName = months[today.getMonth()].toLocaleLowerCase();
  const year = today.getFullYear();

  return (
    <Box width="100%" height="100%">
      <Grid2 container>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          padding="8px"
        >
          <Stack>
            <Typography variant="h6">Praha</Typography>
            <Typography variant="subtitle2">{`${dayName} ${day}. ${monthName}`}</Typography>
          </Stack>
          <Box alignItems="center" display="flex">
            <WbSunnyIcon />
          </Box>
        </Stack>
      </Grid2>
    </Box>
  );
}

export default Today;
