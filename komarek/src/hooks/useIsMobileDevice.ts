import { useMediaQuery } from "@mui/material";

function useIsMobileDevice(): boolean {
  const isMobileDevice = useMediaQuery<boolean>("(max-width: 680px)");
  return isMobileDevice;
}

export default useIsMobileDevice;
