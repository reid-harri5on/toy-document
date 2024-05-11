import { Layout } from "../";
import { Container, Header, Body, Footer } from "./styles";
import { Docs } from "model";
import { useEffect, useState } from "react";
import { TitleList } from "components";
import { DocumentsView } from "views";

export const Documents = () => {
  const [documents, setDocuments] = useState<Docs[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchAndUpdateDocs = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/mock.json`);
      if (!response.ok) {
        console.error("Failed to retrieve file");
        return;
      }

      const fetchedDocs: Docs[] = await response.json();
      const updatedDocs = fetchedDocs.map((doc) => {
        const newDoc = doc;
        newDoc.labels = [];
        return newDoc;
      });

      updatedDocs.forEach((doc) => {
        localStorage.setItem(`${doc.id}`, JSON.stringify(doc));
      });

      setDocuments(updatedDocs.slice(0, 15));
    };

    fetchAndUpdateDocs();
  }, []);

  const setLabels = (labels: string[]) => {
    const newDocs = [...documents];
    newDocs[selectedIndex].labels = labels;
    setDocuments(newDocs);
  };

  return (
    <Layout page="documents">
      <Container>
        <Header />
        <Body>
          <TitleList
            selectedIndex={selectedIndex}
            documents={documents}
            isExpanded={isExpanded}
            setSelectedIndex={setSelectedIndex}
            setDocuments={setDocuments}
            setIsExpanded={setIsExpanded}
          />
          {selectedIndex >= 0 && (
            <DocumentsView
              setIsExpanded={setIsExpanded}
              setSelectedIndex={setSelectedIndex}
              selectedIndex={selectedIndex}
              lastIndex={documents.length}
              labels={documents[selectedIndex].labels}
              isExpanded={isExpanded}
              document={documents[selectedIndex]}
              setLabels={setLabels}
            />
          )}
        </Body>
        <Footer />
      </Container>
    </Layout>
  );
};
