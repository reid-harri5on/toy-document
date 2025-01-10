import { Container, CloseButton, Button, SubHeading } from "./styles";
import { Frame, Heading } from "./styles";
import { useOutside } from "hooks/useOutside";
import { useContext, useRef, useState } from "react";
import { Spacer } from "..";
import { useEffect } from "react";
import { TIME } from "consts";
import { States, Documents } from "model";
import { Context } from "hooks/contexts";

interface ResetModalProps {
  setStates: (states: Partial<States>) => void;
}

export const ResetModal: React.FC<ResetModalProps> = ({ setStates }) => {
  const { selectedIndex, documents } = useContext(Context);
  const document = documents[selectedIndex];
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useOutside(ref, () => {
    setIsVisible(false);
    setTimeout(() => {
      setStates({ showResetModal: false });
    }, TIME.LOADING_MODAL);
  });

  useEffect(() => {
    setIsVisible(true);
    return () => {};
  }, []);

  const handleOK = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStates({ showResetModal: false });
      const jsonData = localStorage.getItem(`${document.id}`);
      if (jsonData) {
        const parsedDoc = JSON.parse(jsonData) as Documents;
        const newDocs = [...documents];
        newDocs[selectedIndex] = parsedDoc;
        setStates({ documents: newDocs });
      }
    }, TIME.LOADING_MODAL);
  };

  const handleCancel = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStates({ showResetModal: false });
    }, TIME.LOADING_MODAL);
  };

  return (
    <Container $visabled={isVisible}>
      <Frame ref={ref}>
        <Heading>Reset Labels</Heading>
        <Spacer />
        <CloseButton onClick={handleCancel}></CloseButton>
        <SubHeading>Do you really reset labels?</SubHeading>
        <Spacer />
        <Button onClick={handleOK}>OK</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Frame>
    </Container>
  );
};
