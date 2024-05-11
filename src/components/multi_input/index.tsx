import { LabelItem, Container, LabelInput } from "./styles";
import { Spacer } from "../";

interface MultiInputProps {
  labels: string[];
  setLabels: (labels: string[]) => void;
  inputLabel: string;
  setInputLabel: (label: string) => void;
}

export const MultiInput: React.FC<MultiInputProps> = (props) => {
  const { labels, setLabels, inputLabel, setInputLabel } = props;

  const handleItemClick = (index: number) => {
    const tempLabels = [...labels];
    tempLabels.splice(index, 1);
    setLabels(tempLabels);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputLabel !== "") {
      const tempLabels = [...labels];
      tempLabels.push(inputLabel);
      setLabels(tempLabels);
      setInputLabel("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputLabel(event.target.value);
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
