import { Container, CloseButton, Button, SubHeading } from "./styles";
import { Frame, Heading } from "./styles";
import { useOutside } from "hooks/useOutside";
import { useContext, useRef, useState } from "react";
import { Spacer } from "..";
import { useEffect } from "react";
import { TIME, PATH } from "consts";
import { States } from "model";
import { useNavigate } from "react-router-dom";
import { Context } from "hooks/contexts";

interface ConfirmModalProps {
  setStates: (states: Partial<States>) => void;
  onSave: () => void;
}

export const SaveModal: React.FC<ConfirmModalProps> = (props) => {
  const { setStates, onSave: handleSave } = props;
  const { targetIndex } = useContext(Context);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useOutside(ref, () => {
    setIsVisible(false);
    setTimeout(() => {
      setStates({ showSaveModal: false });
      navigate(PATH.Document + targetIndex);
      setStates({ isSaved: true });
    }, TIME.LOADING_MODAL);
  });

  useEffect(() => {
    setIsVisible(true);

    return () => {};
  }, []);

  const handleOK = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStates({ showSaveModal: false });
      navigate(PATH.Document + targetIndex);
      setStates({ isSaved: true });
      handleSave();
    }, TIME.LOADING_MODAL);
  };

  const handleCancel = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStates({ showSaveModal: false });
      navigate(PATH.Document + targetIndex);
      setStates({ isSaved: true });
    }, TIME.LOADING_MODAL);
  };

  return (
    <Container $visabled={isVisible}>
      <Frame ref={ref}>
        <Heading>Confirm</Heading>
        <Spacer />
        <CloseButton onClick={handleCancel}></CloseButton>
        <SubHeading>Do you want to save the changes?</SubHeading>
        <Spacer />
        <Button onClick={handleOK}>OK</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Frame>
    </Container>
  );
};
