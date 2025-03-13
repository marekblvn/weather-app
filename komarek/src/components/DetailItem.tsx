import { Card, Stack, Box, Typography, Grid2, Paper } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  readonly label?: ReactNode;
  readonly icon: ReactNode;
  readonly formattedValue?: string;
}

function DetailItem({ label = null, icon, formattedValue = "—" }: Props) {
  return (
    <Grid2 size={{ sm: 12, md: 6, lg: 4, xl: 2 }} padding="2px">
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#ece0e0",
          borderRadius: 1,
          minHeight: { sm: "64px", md: "32px", lg: "64px", xl: "96px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { sm: "4px", md: "8px" },
          height: "90%",
        }}
      >
        <Box
          display="grid"
          flexDirection={{ sm: "row", lg: "column" }}
          justifyContent={{ sm: "space-between", lg: "center" }}
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
            {icon}
            <Typography
              variant="caption"
              textAlign="center"
              color="#a97070"
              fontWeight={700}
            >
              {label}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginBottom={{ xs: "0", lg: "-4px" }}
          >
            <Typography
              variant="subtitle2"
              textAlign="center"
              fontWeight={600}
              color="#804d4d"
            >
              {formattedValue}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid2>
  );
}

export default DetailItem;
