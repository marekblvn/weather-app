import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Error from "./routes/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <Container maxWidth={false}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
