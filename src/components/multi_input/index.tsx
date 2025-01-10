import { LabelItem, Container, LabelInput } from "./styles";
import { Spacer } from "../";
import { Context } from "hooks/contexts";
import { useContext } from "react";
import { States } from "model";

interface MultiInputProps {
  setStates: (states: Partial<States>) => void;
}

export const MultiInput: React.FC<MultiInputProps> = ({
  setStates: updateStates,
}) => {
  const { selectedIndex, inputLabel, documents } = useContext(Context);
  const document = documents[selectedIndex];
  const labels = document.labels;

  const setLabels = (newLabels: string[]) => {};

  const handleItemClick = (index: number) => {
    const newLabels = [...labels];
    newLabels.splice(index, 1);
    setLabels(newLabels);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputLabel !== "") {
      if (!labels.includes(inputLabel)) {
        const newLabels = [...labels];
        newLabels.push(inputLabel);
        setLabels(newLabels);
        updateStates({ inputLabel: "" });
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateStates({ inputLabel: event.target.value });
  };

  return (
    <Container>
      {labels.map((label, index) => (
        <LabelItem
          key={"label-item-" + index}
          onClick={() => handleItemClick(index)}
        >
          <p>{label}</p>
          <button />
        </LabelItem>
      ))}
      <LabelInput
        value={inputLabel}
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
      />
      <Spacer />
    </Container>
  );
};
