import { Layout } from "pages/layout";
import {
  Container,
  Header,
  Body,
  Editor,
  Footer,
  BackBtn,
  Frame,
  Board,
  Control,
  Split,
  BoardNo,
  BoardTitle,
  BoardBody,
  BoardLink,
  BoardSpace,
  BoardFrame,
} from "./styles";
import { Docs } from "model";
import { useEffect, useState } from "react";
import { SuggestModal, TitleList, MultiInput } from "components";
import { NormalButton } from "components";

export const Documents = () => {
  const [docs, setDocs] = useState<Docs[]>([]);
  const [labels, setLabels] = useState<string[][]>([]);
  const [id, setId] = useState(0);
  const [modal, showModal] = useState(false);

  useEffect(() => {
    const fetchAndUpdateDocs = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/mock.json`);
      if (!response.ok) {
        console.error("Failed to retrieve file");
        return;
      }

      const fetchedDocs: Docs[] = await response.json();
      const updatedDocs = fetchedDocs.map((doc) => ({
        ...doc,
        labels: [],
      }));

      updatedDocs.forEach((doc) => {
        localStorage.setItem(`${doc.id}`, JSON.stringify(doc));
      });

      setDocs(updatedDocs.slice(0, 15));
    };

    fetchAndUpdateDocs();
  }, []);

  useEffect(() => {
    if (labels.length === 0) {
      const temp = docs.map(() => []);
      setLabels(temp);
    }
  }, [docs, labels.length]);

  const onGoPrev = () => {
    if (id > 1) setId(id - 1);
  };

  const onGoNext = () => {
    if (id < docs.length) setId(id + 1);
  };

  const onSave = () => {
    if (id > 0 && labels.length > 0) {
      sessionStorage.setItem(`${id}`, JSON.stringify(labels[id - 1]));
      onGoNext();
    }
  };

  const onReset = () => {
    if (id > 0 && labels.length > 0) {
      const text = sessionStorage.getItem(`${id}`) || "";
      try {
        const temp = JSON.parse(text) as string[];
        if (temp !== undefined) {
          let temps = labels.map((arr) => [...arr]);
          temps[id - 1] = temp;
          setLabels(temps);
        }
      } catch {}
    }
  };

  return (
    <Layout page="documents">
      {modal && (
        <SuggestModal
          handleClose={() => showModal(false)}
          titleIndex={id}
          setLabels={setLabels}
          labels={labels}
        />
      )}
      <Container>
        <Header />
        <Body>
          <TitleList
            selectedIndex={id}
            documents={docs}
            isExpanded={id > 0}
            setSelectedIndex={setId}
            setDocuments={setDocs}
          />
          <Editor $selected={id > 0}>
            <BackBtn onClick={() => setId(0)}>{">"}</BackBtn>
            <Frame>
              <Board>
                <BoardFrame>
                  <BoardNo>{`${id}/${docs.length} documents`}</BoardNo>
                  <BoardTitle>
                    {(id > 0 && docs[id - 1].title) || ""}
                  </BoardTitle>
                  <BoardBody>{(id > 0 && docs[id - 1].body) || ""}</BoardBody>
                  <BoardSpace>
                    <BoardLink
                      href={(id > 0 && docs[id - 1].url) || ""}
                      target="#blank"
                    >
                      Go to Acticle...
                    </BoardLink>
                  </BoardSpace>
                  {id > 0 && id <= labels.length && (
                    <MultiInput
                      labels={labels[id - 1]}
                      setLabels={(arr) => {
                        const temp = labels.map((label) => [...label]);
                        temp[id - 1] = arr;
                        setLabels(temp);
                      }}
                    />
                  )}
                </BoardFrame>
              </Board>
              <Control>
                <NormalButton onClick={() => setId(1)}>First</NormalButton>
                <NormalButton onClick={onGoPrev}>Prev</NormalButton>
                <NormalButton onClick={onGoNext}>Next</NormalButton>
                <NormalButton onClick={() => setId(docs.length)}>
                  Last
                </NormalButton>
                <Split />
                <NormalButton onClick={onSave}>Save</NormalButton>
                <NormalButton onClick={onReset}>Reset</NormalButton>
                <NormalButton onClick={() => showModal(true)}>
                  Suggest Label
                </NormalButton>
              </Control>
            </Frame>
          </Editor>
        </Body>
        <Footer />
      </Container>
    </Layout>
  );
};
