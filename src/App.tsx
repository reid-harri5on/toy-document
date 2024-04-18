import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Documents } from "./pages/document";
import { Container } from "styles";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
