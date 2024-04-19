import { Button, Label, Space, Container, CloseBtn } from "./styles";
import { Frame, Heading, Labels, SubHeading } from "./styles";
import { useOutside } from "hooks/useOutside";
import { useRef, useState } from "react";

interface ModalProps {
  id: number;
  onHide: () => void;
  setLabels: (labels: string[][]) => void;
  labels: string[][];
}

const mocks = ["cat", "dog", "elephant", "rabbit", "mouse"];

export const Modal: React.FC<ModalProps> = ({
  onHide,
  id,
  labels,
  setLabels,
}) => {
  const [checks, setChecks] = useState<boolean[]>(mocks.map(() => true));
  const ref = useRef(null);
  useOutside(ref, onHide);

  const onCheck = (index: number) => {
    const temp = checks.map((check) => check);
    if (temp[index] === true) temp[index] = false;
    else temp[index] = true;
    setChecks(temp);
  };

  const onOK = () => {
    if (id > 0 && labels.length > 0) {
      const temp = labels.map((arr) => [...arr]);
      const arr = mocks.filter((mock, index) => checks[index] === true);
      temp[id - 1] = arr;
      setLabels(temp);
    }
    onHide();
  };

  return (
    <Container>
      <Frame ref={ref}>
        <Heading>Suggested Labels</Heading>
        <Space />
        <CloseBtn onClick={onHide}>x</CloseBtn>
        <SubHeading>Labels generated from the AI</SubHeading>
        <Labels>
          {mocks.map((label, index) => {
            return (
              <Label
                $check={checks[index]}
                onClick={() => onCheck(index)}
                key={"mock" + index}
              >
                {label}
              </Label>
            );
          })}
        </Labels>
        <Space></Space>
        <Button onClick={onOK}>OK</Button>
        <Button onClick={onHide}>Cancel</Button>
      </Frame>
    </Container>
  );
};
