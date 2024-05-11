import { Docs } from "model";
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
import { MultiInput, SuggestModal } from "components";
import { useState } from "react";
import { ConfirmModal } from "components/confirm_modal";
import { ResetModal } from "components/reset_modal";

interface DocumentsProps {
  selectedIndex: number;
  lastIndex: number;
  document: Docs;
  labels: string[];
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
  setLabels: (labels: string[]) => void;
  setSelectedIndex: (index: number) => void;
}

export const Documents: React.FC<DocumentsProps> = ({
  selectedIndex,
  lastIndex,
  document,
  labels,
  isExpanded,
  setLabels,
  setIsExpanded,
  setSelectedIndex,
}) => {
  const [inputLabel, setInputLabel] = useState("");
  const [isSaved, setIsSaved] = useState(true);
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [targetIndex, setTargetIndex] = useState(0);

  const handleReset = () => {
    const jsonData = localStorage.getItem(`${document.id}`);
    if (jsonData) {
      const parsedDoc = JSON.parse(jsonData) as Docs;
      const newLabels = [...parsedDoc.labels];
      setLabels(newLabels);
    }
  };

  const handleSave = () => {
    const jsonData = localStorage.getItem(`${document.id}`);
    if (jsonData) {
      const parsedDoc = JSON.parse(jsonData) as Docs;
      const newLabels = [...labels];
      parsedDoc.labels = newLabels;
      localStorage.setItem(`${document.id}`, JSON.stringify(parsedDoc));
      setIsSaved(true);
    }
  };

  const handleGo = (index: number, saved: boolean) => {
    if (index >= 0 && index <= lastIndex - 1) {
      if (saved) {
        setSelectedIndex(index);
        setInputLabel("");
      } else {
        setIsSaved(true);
        setShowConfirmModal(true);
        setTargetIndex(index);
      }
    }
  };

  return (
    <Container $expanded={isExpanded}>
      {showSuggestModal && (
        <SuggestModal
          handleClose={() => setShowSuggestModal(false)}
          setLabels={setLabels}
          labels={lastIndex > 0 ? document.labels : []}
        />
      )}
      {showConfirmModal && (
        <ConfirmModal
          handleClose={() => setShowConfirmModal(false)}
          handleGo={handleGo}
          handleSave={handleSave}
          targetIndex={targetIndex}
        />
      )}
      {showResetModal && (
        <ResetModal
          handleClose={() => setShowResetModal(false)}
          handleReset={handleReset}
        />
      )}
      <ExpandButton onClick={() => setIsExpanded(false)}>{">"}</ExpandButton>
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
            <MultiInput
              labels={labels}
              inputLabel={inputLabel}
              setInputLabel={setInputLabel}
              setLabels={(newLabels) => {
                if (newLabels !== labels) {
                  setLabels(newLabels);
                  setIsSaved(false);
                }
              }}
            />
          </BoardFrame>
        </Board>
        <Control>
          <div>
            <Button onClick={() => handleGo(0, isSaved)}>First</Button>
            <Button onClick={() => handleGo(selectedIndex - 1, isSaved)}>
              Prev
            </Button>
            <Button onClick={() => handleGo(selectedIndex + 1, isSaved)}>
              Next
            </Button>
            <Button onClick={() => handleGo(lastIndex - 1, isSaved)}>
              Last
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                handleSave();
                handleGo(selectedIndex + 1, true);
              }}
            >
              Save
            </Button>
            <Button onClick={() => setShowResetModal(true)}>Reset</Button>
            <Button onClick={() => setShowSuggestModal(true)}>
              Suggest Label
            </Button>
          </div>
        </Control>
      </Frame>
    </Container>
  );
};
