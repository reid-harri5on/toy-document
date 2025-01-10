import { Documents, States } from "model";
import {
  Container,
  ExpandButton,
  Frame,
  Board,
  Control,
  BoardNo,
  BoardTitle,
  BoardBody,
  BoardLink,
  BoardSpace,
  BoardFrame,
  Button,
} from "./styles";
import { MultiInput, SuggestModal, ResetModal, SaveModal } from "components";
import { useContext } from "react";
import { Context } from "hooks/contexts";
import { useNavigate } from "react-router-dom";
import { PATH } from "consts";

interface DocumentViewProps {
  setStates: (states: Partial<States>) => void;
}

export const DocumentView: React.FC<DocumentViewProps> = ({ setStates }) => {
  const navigate = useNavigate();
  const {
    selectedIndex,
    isExpanded,
    isSaved,
    documents,
    showSaveModal,
    showResetModal,
    showSuggestModal,
  } = useContext(Context);
  const document = documents[selectedIndex];
  const lastIndex = documents.length;

  const handleSave = () => {
    const jsonData = localStorage.getItem(`${document.id}`);
    if (jsonData) {
      const parsedDoc = JSON.parse(jsonData) as Documents;
      const newLabels = [...document.labels];
      parsedDoc.labels = newLabels;
      localStorage.setItem(`${document.id}`, JSON.stringify(parsedDoc));
      setStates({ isSaved: true });
    }
  };

  const handleGo = (index: number) => {
    if (index >= 0 && index <= documents.length - 1) {
      if (isSaved) {
        navigate(PATH.Document + index);
        setStates({ inputLabel: "" });
      } else {
        setStates({ showSaveModal: true });
        setStates({ targetIndex: index });
      }
    }
  };

  return (
    <Container $expanded={isExpanded}>
      {showSuggestModal && <SuggestModal setStates={setStates} />}
      {showSaveModal && <SaveModal setStates={setStates} onSave={handleSave} />}
      {showResetModal && <ResetModal setStates={setStates} />}
      <ExpandButton onClick={() => setStates({ isExpanded: false })}>
        {">"}
      </ExpandButton>
      <Frame>
        <Board>
          <BoardFrame>
            <BoardNo>{`${selectedIndex + 1}/${lastIndex} documents`}</BoardNo>
            <BoardTitle>{document.title || ""}</BoardTitle>
            <BoardBody>{document.body || ""}</BoardBody>
            <BoardSpace>
              <BoardLink href={document.url || ""} target="#blank">
                Go to Acticle...
              </BoardLink>
            </BoardSpace>
            <MultiInput setStates={setStates} />
          </BoardFrame>
        </Board>
        <Control>
          <div>
            <Button onClick={() => handleGo(0)}>First</Button>
            <Button onClick={() => handleGo(selectedIndex - 1)}>Prev</Button>
            <Button onClick={() => handleGo(selectedIndex + 1)}>Next</Button>
            <Button onClick={() => handleGo(lastIndex - 1)}>Last</Button>
          </div>
          <div>
            <Button
              onClick={() => {
                setStates({ showSaveModal: true });
                handleGo(selectedIndex + 1);
                handleSave();
              }}
            >
              Save
            </Button>
            <Button onClick={() => setStates({ showResetModal: true })}>
              Reset
            </Button>
            <Button onClick={() => setStates({ showSuggestModal: true })}>
              Suggest Label
            </Button>
          </div>
        </Control>
      </Frame>
    </Container>
  );
};
