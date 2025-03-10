import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Error from "./routes/Error";

function App() {
  return (
    <Container maxWidth={"xl"}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
