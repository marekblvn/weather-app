import { Box, Slide } from "@mui/material";
import { ReactElement } from "react";

interface Props {
  readonly children: ReactElement;
  value: number;
  index: number;
}

function TabPanel({ children, value, index }: Props) {
  if (value !== index) return null;
  const direction = index === 0 ? "right" : "left";
  return (
    <Slide in={value === index} direction={direction}>
      <Box marginTop="12px" width="100%">
        {children}
      </Box>
    </Slide>
  );
}

export default TabPanel;
