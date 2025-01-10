import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage, DocumentPage } from "./pages";
import { Container } from "styles";
import { PATH } from "consts";
import { useState } from "react";
import { States } from "model";
import { Context } from "hooks/contexts";

export const App = () => {
  const [states, setStates] = useState<States>({
    documents: [],
    isExpanded: false,
    isSaved: false,
    inputLabel: "",
    targetIndex: 0,
    selectedIndex: -1,
    showSuggestModal: false,
    showSaveModal: false,
    showResetModal: false,
  });

  const updateStates = (newState: Partial<States>) => {
    setStates((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <Container>
      <Context.Provider value={states}>
        <BrowserRouter>
          <Routes>
            <Route path={PATH.Home} element={<HomePage />} />
            <Route
              path={PATH.Document}
              element={<DocumentPage setStates={updateStates} />}
            />
            <Route
              path={PATH.Document + ":id"}
              element={<DocumentPage setStates={updateStates} />}
            />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </Container>
  );
};
