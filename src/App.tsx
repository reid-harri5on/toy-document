import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage, DocumentsPage } from "./pages";
import { Container } from "styles";
import { PATH } from "consts";

export const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.Home} element={<HomePage />} />
          <Route path={PATH.Document} element={<DocumentsPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
