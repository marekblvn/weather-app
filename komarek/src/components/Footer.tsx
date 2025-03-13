import { Box, Divider, Stack, Typography } from "@mui/material";
import Lsi from "./Lsi";

function Footer() {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      bgcolor="#ece0e0"
      width="100%"
      height="48px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="0px 0px 8px #3f2626"
    >
      <Stack direction="row" alignItems="center" spacing="8px">
        <Typography
          variant="caption"
          fontSize="11px"
          style={{ userSelect: "none" }}
          color="#905656"
        >
          <Lsi
            lsi={{ en: "Made by Marek Balvín", cs: "Vytvořil Marek Balvín" }}
          />
        </Typography>
        <Divider
          orientation="vertical"
          sx={{ height: "32px", color: "#905656" }}
        />
        <Typography variant="caption" fontSize="11px" color="#905656">
          Powered by{" "}
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI.com
          </a>
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
