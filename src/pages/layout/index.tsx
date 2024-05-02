import React from "react";
import {
  Body,
  Button,
  Container,
  Footer,
  Frame,
  Header,
  Logo,
  Label,
  LogoBtn,
  NLP,
} from "./styles";
import { ICON } from "assets";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  page: string;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, page } = props;

  const navigate = useNavigate();

  const onGoHome = () => {
    navigate("/");
  };

  const onGoDocuments = () => {
    navigate("/documents");
  };

  return (
    <Container>
      <Header>
        <Frame $page={page}>
          <Logo $page={page} onClick={onGoHome} />
          <LogoBtn $page={page} onClick={onGoHome}>
            Toy Document Labeling
          </LogoBtn>
        </Frame>
        {page === "documents" && <NLP>NLP</NLP>}
        <Frame $page={page}>
          <Button $page={page} $image={ICON.Home} onClick={onGoHome}>
            Home
          </Button>
          <Button $page={page} $image={ICON.Document} onClick={onGoDocuments}>
            Documents
          </Button>
        </Frame>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <Label>Copyright © 2024</Label>
      </Footer>
    </Container>
  );
};
