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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.PUBLIC_URL + "mock.json");
      if (!response.ok) {
        throw new Error("Failed to retrieve file");
      }
      const datas = await response.json();
      setDocs(datas);
    };

    fetchData();
  }, []);

  const goFirst = () => {
    setId(1);
  };

  const goPrev = () => {
    if (id > 1) setId(id - 1);
  };

  const goNext = () => {
    if (id < docs.length) setId(id + 1);
  };

  const goLast = () => {
    setId(docs.length);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (labels.length === 0) {
        docs.forEach(() => {
          labels.push([]);
        });
      }
      labels[id - 1].push(value);
      setLabels(labels);
      setValue("");
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Layout page="documents">
      <Container>
        <Header>NLP</Header>
        <Body>
          <Titles selected={id > 0}>
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
          <Editor selected={id > 0}>
            <BackBtn onClick={() => setId(0)}>{">"}</BackBtn>
            <Frame>
              <Board>
                <BoardNo>{id > 0 && `${id}/${docs.length} documents`}</BoardNo>
                <BoardTitle>
                  {id > 0 && `${docs[id - 1].title} documents`}
                </BoardTitle>
                <BoardBody>
                  {id > 0 && `${docs[id - 1].body} documents`}
                </BoardBody>
                <BoardSpace>
                  <BoardLink
                    href={id > 0 ? docs[id - 1].url : ""}
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
                          <Label key={"lable" + index}>
                            <div>{label}</div>
                            <button
                              onClick={() => {
                                let temp = labels.map((arr) => [...arr]);
                                temp[id - 1].splice(index, 1);
                                setLabels(temp);
                              }}
                            >
                              x
                            </button>
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
                <EditBtn onClick={goFirst}>First</EditBtn>
                <EditBtn onClick={goPrev}>Prev</EditBtn>
                <EditBtn onClick={goNext}>Next</EditBtn>
                <EditBtn onClick={goLast}>Last</EditBtn>
                <Split />
                <EditBtn>Save</EditBtn>
                <EditBtn>Reset</EditBtn>
                <EditBtn>Suggest Label</EditBtn>
              </Control>
            </Frame>
          </Editor>
        </Body>
        <Footer />
      </Container>
    </Layout>
  );
};
