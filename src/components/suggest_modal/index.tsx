import { CheckButton, Container, CloseButton, Button } from "./styles";
import { Frame, Heading, Group, SubHeading } from "./styles";
import { useOutside } from "hooks/useOutside";
import { useRef, useState, useEffect, useContext } from "react";
import { Spinner, Spacer } from "../";
import { TIME } from "consts";
import { States } from "model";
import { Context } from "hooks/contexts";

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
  setStates: (states: Partial<States>) => void;
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

export const SuggestModal: React.FC<SuggestModalProps> = ({ setStates }) => {
  const { documents, selectedIndex } = useContext(Context);
  const document = documents[selectedIndex];
  const [labelStates, setLabelStates] = useState<boolean[]>([]);
  const [suggestedLabels, setSuggestedLabels] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleLoad = async () => {
    setTimeout(() => {
      const randomLabels = getRandomLabels();
      setLabelStates(randomLabels.map(() => true));
      setSuggestedLabels(randomLabels);
      setIsLoading(false);
    }, TIME.LOADING_SUGGEST);
  };

  useOutside(ref, () => {
    setIsVisible(false);
    setTimeout(() => {
      setStates({ showSuggestModal: false });
    }, TIME.LOADING_MODAL);
  });

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      handleLoad();
    }, TIME.LOADING_MODAL);

    return () => {};
  }, []);

  const handleRegenerate = () => {
    setLabelStates([]);
    setSuggestedLabels([]);
    setIsLoading(true);

    handleLoad();
  };

  const handleCheck = (index: number) => {
    const newLabelStates = labelStates.map((check) => check);
    newLabelStates[index] = newLabelStates[index] ? false : true;
    setLabelStates(newLabelStates);
  };

  const handleComplete = () => {
    const checkedLabels = suggestedLabels.filter(
      (suggestedLabel, index) =>
        labelStates[index] && !document.labels.includes(suggestedLabel)
    );
    const newLabels = [...document.labels, ...checkedLabels];
    const newDocs = [...documents];
    newDocs[selectedIndex] = { ...document, labels: newLabels };
    setStates({ documents: newDocs });
    setIsVisible(false);
    setTimeout(
      () => setStates({ showSuggestModal: false }),
      TIME.LOADING_MODAL
    );
  };

  const handleCancel = () => {
    setIsVisible(false);
    setTimeout(
      () => setStates({ showSuggestModal: false }),
      TIME.LOADING_MODAL
    );
  };

  return (
    <Container $visabled={isVisible}>
      <Frame ref={ref}>
        <Heading>Suggested Labels</Heading>
        <Spacer />
        <CloseButton onClick={handleCancel}></CloseButton>
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
          {isLoading && <Spinner />}
        </Group>
        <Button onClick={handleRegenerate}>Regenerate</Button>
        <Spacer />
        <Button onClick={handleComplete}>OK</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Frame>
    </Container>
  );
};
