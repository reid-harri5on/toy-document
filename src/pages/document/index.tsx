import { Layout } from "pages/layout";
import {
  Container,
  Header,
  Body,
  Titles,
  Editor,
  Footer,
  TitleItm,
  BackBtn,
  Frame,
  Board,
  Control,
  EditBtn,
  Split,
  BoardNo,
  BoardTitle,
  BoardBody,
  BoardLink,
  BoardSpace,
  BoardEdit,
  BoardFrame,
  BoardLabel,
  Edit,
  Label,
} from "./styles";
import React, { useEffect, useState } from "react";
import { Modal } from "./modal";

export interface DocData {
  id: number;
  title: string;
  body: string;
  url: string;
}

export const Documents = () => {
  const [docs, setDocs] = useState<DocData[]>([]);
  const [labels, setLabels] = useState<string[][]>([]);
  const [value, setValue] = useState("");
  const [id, setId] = useState(0);
  const [modal, showModal] = useState(false);

  useEffect(() => {
    const fetchJson = async () => {
      const response = await fetch(process.env.PUBLIC_URL + "mock.json");
      if (!response.ok) {
        throw new Error("Failed to retrieve file");
      }
      const datas = await response.json();
      setDocs(datas);
    };

    fetchJson();
  }, []);

  useEffect(() => {
    if (labels.length === 0) {
      const temp = docs.map((doc) => []);
      setLabels(temp);
    }
  }, [docs, labels.length]);

  const onGoPrev = () => {
    if (id > 1) setId(id - 1);
  };

  const onGoNext = () => {
    if (id < docs.length) setId(id + 1);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && id > 0 && labels.length > 0) {
      labels[id - 1].push(value);
      setLabels(labels);
      setValue("");
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onDelete = (index: number) => {
    let temp = labels.map((arr) => [...arr]);
    temp[id - 1].splice(index, 1);
    setLabels(temp);
  };

  const onSave = () => {
    if (id > 0 && labels.length > 0)
      sessionStorage.setItem(`${id}`, labels[id - 1].join(","));
  };

  const onReset = () => {
    if (id > 0 && labels.length > 0) {
      const temp = labels.map((arr) => [...arr]);
      const session = sessionStorage.getItem(`${id}`) || "";
      temp[id - 1] = session.split(",");
      setLabels(temp);
    }
  };

  return (
    <Layout page="documents">
      {modal && (
        <Modal
          onHide={() => showModal(false)}
          id={id}
          setLabels={setLabels}
          labels={labels}
        />
      )}
      <Container>
        <Header />
        <Body>
          <Titles $selected={id > 0}>
            {docs.map((data) => {
              return (
                <TitleItm
                  key={data.id}
                  disabled={data.id + 1 === id}
                  onClick={() => setId(data.id + 1)}
                >
                  <div id="id">{data.id + 1}</div>
                  {id === 0 && <div id="title">{data.title}</div>}
                </TitleItm>
              );
            })}
          </Titles>
          <Editor $selected={id > 0}>
            <BackBtn onClick={() => setId(0)}>{">"}</BackBtn>
            <Frame>
              <Board>
                <BoardNo>{`${id}/${docs.length} documents`}</BoardNo>
                <BoardTitle>{(id > 0 && docs[id - 1].title) || ""}</BoardTitle>
                <BoardBody>{(id > 0 && docs[id - 1].body) || ""}</BoardBody>
                <BoardSpace>
                  <BoardLink
                    href={(id > 0 && docs[id - 1].url) || ""}
                    target="#blank"
                  >
                    Go to Acticle...
                  </BoardLink>
                </BoardSpace>
                <BoardEdit>
                  <BoardLabel>Label:</BoardLabel>
                  <BoardFrame>
                    {id > 0 &&
                      labels.length > 0 &&
                      labels[id - 1].map((label, index) => {
                        return (
                          <Label key={"label" + index}>
                            <div>{label}</div>
                            <button onClick={() => onDelete(index)}>x</button>
                          </Label>
                        );
                      })}
                    <Edit
                      onKeyDown={onKeyDown}
                      onChange={onChange}
                      value={value}
                    ></Edit>
                  </BoardFrame>
                </BoardEdit>
              </Board>
              <Control>
                <EditBtn onClick={() => setId(1)}>First</EditBtn>
                <EditBtn onClick={onGoPrev}>Prev</EditBtn>
                <EditBtn onClick={onGoNext}>Next</EditBtn>
                <EditBtn onClick={() => setId(docs.length)}>Last</EditBtn>
                <Split />
                <EditBtn onClick={onSave}>Save</EditBtn>
                <EditBtn onClick={onReset}>Reset</EditBtn>
                <EditBtn onClick={() => showModal(true)}>Suggest Label</EditBtn>
              </Control>
            </Frame>
          </Editor>
        </Body>
        <Footer />
      </Container>
    </Layout>
  );
};
