import { Card, Stack, Box, Typography } from "@mui/material";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import Arrow from "@mui/icons-material/NorthOutlined";
import Lsi from "./Lsi";

interface Props {
  readonly degrees: number;
}

function WindDirectionIcon({ degrees }: Props) {
  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        columnGap={{ xs: "16px", m: "8px" }}
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
          <ExploreOutlinedIcon />
          <Typography variant="caption">
            {<Lsi lsi={{ en: "Wind Direction", cs: "Směr větru" }} />}
          </Typography>
        </Box>
        <Typography flexGrow="1" textAlign="center">
          <Arrow
            style={{
              transform: `rotate(${degrees}deg)`,
              marginRight: "18px",
            }}
          />
        </Typography>
      </Stack>
    </Card>
  );
}

export default WindDirectionIcon;
