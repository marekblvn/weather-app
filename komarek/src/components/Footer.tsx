import { Box, Divider, Typography } from "@mui/material";
import Lsi from "./Lsi";

function Footer() {
  return (
    <Box
      position="absolute"
      bgcolor="#ece0e0"
      bottom={0}
      left={0}
      width="100%"
      height="48px"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography
        variant="caption"
        fontSize="11px"
        style={{ userSelect: "none" }}
      >
        <Lsi
          lsi={{ en: "Made by Marek Balvín", cs: "Vytvořil Marek Balvín" }}
        />{" "}
        @ 2025
      </Typography>
      <Divider orientation="vertical" style={{ height: "32px" }} />
      <Typography variant="caption" fontSize="11px">
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </Typography>
    </Box>
  );
}

export default Footer;
