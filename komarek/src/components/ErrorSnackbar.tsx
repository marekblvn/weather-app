import { Alert, AlertTitle, Snackbar } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import Lsi from "./Lsi";

interface Props {
  readonly open?: boolean;
  readonly onClose?: () => void;
  readonly error?: string | null;
}

function ErrorSnackbar({
  open = false,
  onClose = () => {},
  error = "",
}: Props) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={5000}
      anchorOrigin={{ horizontal: "left", vertical: "top" }}
    >
      <Alert severity="error" variant="outlined" icon={<ErrorIcon />}>
        <AlertTitle>
          <Lsi lsi={{ en: "Error", cs: "Chyba" }} />
        </AlertTitle>
        {error}
      </Alert>
    </Snackbar>
  );
}

export default ErrorSnackbar;
