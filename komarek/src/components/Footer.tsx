import { Box, Typography } from "@mui/material";
import Lsi from "./Lsi";

function Footer() {
  return (
    <Box
      position="absolute"
      bgcolor="#19191940"
      bottom={0}
      left={0}
      width="100%"
      height="48px"
      display="flex"
      justifyContent="center"
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
    </Box>
  );
}

export default Footer;
