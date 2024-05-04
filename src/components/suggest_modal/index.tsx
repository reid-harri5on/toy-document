import { CheckButton, Container, CloseButton, Button } from "./styles";
import { Frame, Heading, Group, SubHeading } from "./styles";
import { useOutside } from "hooks/useOutside";
import { useRef, useState, useEffect } from "react";
import { Spinner, Spacer } from "../";

const animals = [
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

interface SuggestModalProps {
  titleIndex: number;
  handleClose: () => void;
  setLabels: (labels: string[][]) => void;
  labels: string[][];
}

const getRandomLabels = () => {
  const randomLength = Math.floor(Math.random() * 3) + 3; // Random length between 3 and 5
  const randomIndices: string[] = [];

  // Generate random indices within the range of the animalNames array
  while (randomIndices.length < randomLength) {
    const randomIndex = Math.floor(Math.random() * animals.length);
    if (!randomIndices.includes(animals[randomIndex])) {
      randomIndices.push(animals[randomIndex]);
    }
  }
  return randomIndices;
};

export const SuggestModal: React.FC<SuggestModalProps> = (props) => {
  const { handleClose, titleIndex, labels, setLabels } = props;
  const [labelStates, setLabelStates] = useState<boolean[]>([]);
  const [suggestedLabels, setSuggestedLabels] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useOutside(ref, () => {
    setIsVisible(false);
    setTimeout(() => {
      handleClose();
    }, 500);
  });

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      const randomLabels = getRandomLabels();
      setLabelStates(randomLabels.map(() => true));
      setSuggestedLabels(randomLabels);
      setIsLoading(false);
    }, 1500);

    return () => {};
  }, []);

  const handleRegenerate = () => {
    setLabelStates([]);
    setSuggestedLabels([]);
    setIsLoading(true);

    setTimeout(() => {
      const randomSuggests = getRandomLabels();
      setLabelStates(randomSuggests.map(() => true));
      setSuggestedLabels(randomSuggests);
      setIsLoading(false);
    }, 1000);
  };

  const handleCheck = (index: number) => {
    const newLabelStates = labelStates.map((check) => check);
    newLabelStates[index] = newLabelStates[index] ? false : true;
    setLabelStates(newLabelStates);
  };

  const handleComplete = () => {
    if (titleIndex > 0 && labels.length > 0) {
      const newLabels = labels.map((label) => [...label]);
      const checkedLabels = suggestedLabels.filter(
        (suggestedLabel, index) => labelStates[index]
      );
      newLabels[titleIndex - 1] = checkedLabels;
      setLabels(newLabels);
    }
    handleClose();
  };

  return (
    <Container $visabled={isVisible}>
      <Frame ref={ref}>
        <Heading>Suggested Labels</Heading>
        <Spacer />
        <CloseButton onClick={handleClose}></CloseButton>
        <SubHeading>Labels generated from the AI</SubHeading>
        <Group>
          {suggestedLabels.map((label, index) => {
            return (
              <CheckButton
                $check={labelStates[index]}
                onClick={() => handleCheck(index)}
                key={"sugget-label-" + index}
              >
                {label}
              </CheckButton>
            );
          })}
          {!isLoading && <Spacer />}
          {isLoading && <Spinner />}
        </Group>
        <Button onClick={handleRegenerate}>Regenerate</Button>
        <Spacer />
        <Button onClick={handleComplete}>OK</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </Frame>
    </Container>
  );
};
