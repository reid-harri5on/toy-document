import { Docs as Documents } from "model";
import { Container, TitleItem } from "./styles";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "../";
import { MAXCOUNT, SCROLLCOUNT, TIME } from "consts";

interface TitleListProps {
  selectedIndex: number;
  isExpanded: boolean;
  documents: Documents[];
  setSelectedIndex: (index: number) => void;
  setDocuments: (documents: Documents[]) => void;
  setIsExpanded: (isExpanded: boolean) => void;
}

export const TitleList: React.FC<TitleListProps> = ({
  selectedIndex,
  documents,
  isExpanded,
  setDocuments,
  setSelectedIndex,
  setIsExpanded,
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
      if (documents.length < MAXCOUNT) {
        setIsLoading(true);
        setTimeout(() => {
          const lastIndex = documents.length;
          const newDocs: Documents[] = [...documents];

          for (let i = 0; i < SCROLLCOUNT; i++) {
            const index = lastIndex + i;
            const jsonData = localStorage.getItem(`${index}`);
            if (jsonData) {
              const document = JSON.parse(jsonData) as Documents;
              newDocs.push(document);
            }
          }

          setDocuments(newDocs);
          setIsLoading(false);
        }, TIME.LOADING_SUGGEST);
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
            disabled={document.id === selectedIndex}
            onClick={() => {
              setSelectedIndex(document.id);
              setIsExpanded(true);
            }}
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
