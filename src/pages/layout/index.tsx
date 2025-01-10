import React from "react";
import {
  Body,
  Button,
  Container,
  Footer,
  Group,
  Header,
  LogoIcon,
  Label,
  LogoButton,
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

  const handleToHome = () => {
    navigate("/");
  };

  const handleToDocument = () => {
    navigate("/documents");
  };

  return (
    <Container>
      <Header $page={page}>
        <Group $page={page}>
          <LogoIcon $page={page} onClick={handleToHome} />
          <LogoButton $page={page} onClick={handleToHome}>
            Toy Document Labeling
          </LogoButton>
        </Group>
        {page === "documents" && <NLP>NLP</NLP>}
        <Group $page={page}>
          <Button $page={page} $image={ICON.Home} onClick={handleToHome}>
            Home
          </Button>
          <Button
            $page={page}
            $image={ICON.Document}
            onClick={handleToDocument}
          >
            Documents
          </Button>
        </Group>
      </Header>
      <Body>{children}</Body>
      <Footer $page={page}>
        <Label>Copyright © 2024</Label>
      </Footer>
    </Container>
  );
};
