import { Container, Slide } from "@mui/material";
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
      <Container style={{ marginTop: "12px" }}>{children}</Container>
    </Slide>
  );
}

export default TabPanel;
