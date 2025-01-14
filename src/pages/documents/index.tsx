import { Layout } from "../";
import { Container, Body } from "./styles";
import { Documents, States } from "model";
import { useContext, useEffect } from "react";
import { TitleList } from "components";
import { DocumentView } from "views";
import { useParams } from "react-router-dom";
import { Context } from "hooks/contexts";

interface DocumentPageProps {
  setStates: (states: Partial<States>) => void;
}

export const DocumentPage: React.FC<DocumentPageProps> = ({ setStates }) => {
  const params = useParams();
  const { selectedIndex, documents } = useContext(Context);

  useEffect(() => {
    const fetchAndUpdateDocs = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/mock.json`);
      if (!response.ok) {
        console.error("Failed to retrieve file");
        return;
      }

      const fetchedDocs: Documents[] = await response.json();

      const updatedDocs = fetchedDocs.map((doc) => {
        const jsonData = localStorage.getItem(`${doc.id}`);
        const existingDoc = JSON.parse(jsonData || "{}") as Documents;
        if (existingDoc.id === undefined) {
          localStorage.setItem(`${doc.id}`, JSON.stringify(doc));
          return doc;
        }
        return existingDoc;
      });

      setStates({ documents: updatedDocs });
    };

    fetchAndUpdateDocs();
    setStates({ selectedIndex: Number(params.id || "-1") });
  }, [params.id]);

  return (
    <Layout page="documents">
      <Container>
        <Body>
          <TitleList setStates={setStates} />
          {selectedIndex >= 0 && documents.length > 0 && (
            <DocumentView setStates={setStates} />
          )}
        </Body>
      </Container>
    </Layout>
  );
};
