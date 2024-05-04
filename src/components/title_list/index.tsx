import { Docs as Documents } from "model";
import { Container, TitleItem } from "./styles";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "../";

const maxCount = 30;

interface TitleListProps {
  selectedIndex: number;
  isExpanded: boolean;
  documents: Documents[];
  setSelectedIndex: (index: number) => void;
  setDocuments: (documents: Documents[]) => void;
}

export const TitleList: React.FC<TitleListProps> = ({
  selectedIndex,
  documents,
  setDocuments,
  setSelectedIndex,
  isExpanded,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (isLoading) {
      if (element) {
        element.scrollBy({
          behavior: "smooth",
          top: 100,
        });
      }
    }
  }, [isLoading]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, clientHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && !isLoading) {
      if (documents.length < maxCount) {
        setIsLoading(true);
        setTimeout(() => {
          const lastIndex = documents.length;
          const newDocument: Documents[] = [...documents];

          for (let i = 0; i < 4; i++) {
            const index = lastIndex + i;
            const jsonData = localStorage.getItem(`${index}`);
            if (jsonData) {
              const document = JSON.parse(jsonData) as Documents;
              newDocument.push(document);
            }
          }

          setDocuments(newDocument);
          setIsLoading(false);
        }, 3000);
      }
    }
  };

  return (
    <Container
      $expanded={isExpanded}
      onScroll={handleScroll}
      ref={containerRef}
    >
      {documents.map((document) => {
        return (
          <TitleItem
            key={"title-" + document.id}
            disabled={document.id + 1 === selectedIndex}
            onClick={() => setSelectedIndex(document.id + 1)}
          >
            <div id="id">{document.id + 1}</div>
            <div id="title">{document.title}</div>
          </TitleItem>
        );
      })}
      {isLoading && <Spinner />}
    </Container>
  );
};
