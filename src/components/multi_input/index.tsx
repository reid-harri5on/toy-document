import { useState } from "react";
import { LabelItem, Container, LabelInput } from "./styles";
import { Spacer } from "../";

interface MultiInputProps {
  labels: string[];
  setLabels: (labels: string[]) => void;
}

export const MultiInput: React.FC<MultiInputProps> = (props) => {
  const { labels, setLabels } = props;
  const [inputLabel, setInputLabel] = useState("");

  const onLabelItemClick = (index: number) => {
    const tempLabels = [...labels];
    tempLabels.splice(index, 1);
    setLabels(tempLabels);
  };

  const onLabelInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputLabel !== "") {
      const tempLabels = [...labels];
      tempLabels.push(inputLabel);
      setLabels(tempLabels);
      setInputLabel("");
    }
  };

  const onLabelInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputLabel(event.target.value);
  };

  return (
    <Container>
      {labels.map((label, index) => (
        <LabelItem onClick={() => onLabelItemClick(index)}>
          <p>{label}</p>
          <button />
        </LabelItem>
      ))}
      <LabelInput
        value={inputLabel}
        onKeyDown={onLabelInputKeyDown}
        onChange={onLabelInputChange}
      />
      <Spacer />
    </Container>
  );
};
