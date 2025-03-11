import { Card, Stack, Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  readonly label?: ReactNode;
  readonly icon: ReactNode;
  readonly formattedValue?: string;
}

function DetailCard({ label = null, icon, formattedValue = "—" }: Props) {
  return (
    <Card style={{ backgroundColor: "#e3d0d0" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        columnGap={{ xs: "16px", s: "4px", m: "8px" }}
        minHeight={{ xs: "48px", s: "64px" }}
        padding="8px"
        display="flex"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flexGrow="1"
        >
          {icon}
          <Typography variant="caption" textAlign="center">
            {label}
          </Typography>
        </Box>
        <Typography variant="subtitle2" flexGrow="1" textAlign="center">
          {formattedValue}
        </Typography>
      </Stack>
    </Card>
  );
}

export default DetailCard;
