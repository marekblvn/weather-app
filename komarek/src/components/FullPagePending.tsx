import { Box } from "@mui/material";
import loadingGif from "../assets/animations/loading.gif";

function FullPagePending() {
  return (
    <Box
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
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: `url(${loadingGif})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "400px",
          height: "225px",
        }}
      />
    </Box>
  );
}

export default FullPagePending;
