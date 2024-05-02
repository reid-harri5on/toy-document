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

const mocks = [
  "giraffe",
  "penguin",
  "dolphin",
  "lion",
  "koala",
  "panda",
  "kangaroo",
  "elephant",
  "cheetah",
  "chameleon",
  "rhinoceros",
  "flamingo",
  "shark",
  "owl",
  "zebra",
  "sloth",
  "polar bear",
  "peacock",
  "squirrel",
  "gorilla",
  "otter",
  "hedgehog",
  "seahorse",
  "meerkat",
  "llama",
  "moose",
  "wombat",
  "platypus",
  "raccoon",
  "armadillo",
  "chinchilla",
  "quokka",
  "okapi",
  "capybara",
  "narwhal",
  "kiwi",
  "iguana",
  "echidna",
  "piranha",
  "tarantula",
  "opossum",
  "anteater",
  "gazelle",
  "meerkat",
  "pangolin",
];

const getRandomNames = () => {
  const randomLength = Math.floor(Math.random() * 3) + 3; // Random length between 3 and 5
  const randomIndices: string[] = [];

  // Generate random indices within the range of the animalNames array
  while (randomIndices.length < randomLength) {
    const randomIndex = Math.floor(Math.random() * mocks.length);
    if (!randomIndices.includes(mocks[randomIndex])) {
      randomIndices.push(mocks[randomIndex]);
    }
  }
  return randomIndices;
};

export const Modal: React.FC<ModalProps> = ({
  onHide,
  id,
  labels,
  setLabels,
}) => {
  const tempNames = getRandomNames();
  const [checks, setChecks] = useState<boolean[]>(tempNames.map(() => true));
  const [names, setNames] = useState<string[]>(tempNames);
  const ref = useRef(null);
  useOutside(ref, onHide);

  const onRegenerate = () => {
    const tempNames = getRandomNames();
    setChecks(tempNames.map(() => true));
    setNames(tempNames);
  };

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
        <CloseBtn onClick={onHide}></CloseBtn>
        <SubHeading>Labels generated from the AI</SubHeading>
        <Labels>
          {names.map((label, index) => {
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
        <Button onClick={onRegenerate}>Regenerate</Button>
        <Space></Space>
        <Button onClick={onOK}>OK</Button>
        <Button onClick={onHide}>Cancel</Button>
      </Frame>
    </Container>
  );
};
