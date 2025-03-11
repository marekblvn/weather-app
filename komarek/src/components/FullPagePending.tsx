import { CircularProgress, Paper } from "@mui/material";

function FullPagePending() {
  return (
    <Paper
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f6f0f0",
      }}
    >
      <CircularProgress
        style={{ width: "25%", height: "25%", color: "#d9c0c0" }}
      />
    </Paper>
  );
}

export default FullPagePending;
