import { Box, Typography, Paper, Grid2 } from "@mui/material";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import Arrow from "@mui/icons-material/NorthOutlined";
import Lsi from "./Lsi";

interface Props {
  readonly degrees: number;
}

function WindDirectionItem({ degrees }: Props) {
  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 2 }} padding="2px">
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#ece0e0",
          borderRadius: 1,
          minHeight: { xs: "64px", md: "32px", lg: "64px", xl: "96px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "4px", md: "8px" },
          height: "90%",
        }}
      >
        <Box
          display="grid"
          flexDirection={{ xs: "row", lg: "column" }}
          justifyContent={{ xs: "space-between", lg: "center" }}
          gridTemplateColumns={{ xs: "50% 50%", lg: "none" }}
          gridTemplateRows={{ xs: "none", lg: "50% 50%" }}
          width="100%"
          height="100%"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={{ xs: "0", lg: "16px" }}
          >
            <ExploreOutlinedIcon sx={{ color: "#a97070" }} />
            <Typography variant="caption" color="#a97070" fontWeight={700}>
              {<Lsi lsi={{ en: "Wind Dir.", cs: "Směr větru" }} />}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginBottom={{ xs: "0", lg: "-4px" }}
          >
            <Arrow
              sx={{
                transform: `rotate(${degrees}deg)`,
                height: { xs: "24px", lg: "22px" },
                width: { xs: "24px", lg: "22px" },
              }}
              style={{
                color: "#804d4d",
              }}
            />
          </Box>
        </Box>
      </Paper>
    </Grid2>
  );
}

export default WindDirectionItem;
