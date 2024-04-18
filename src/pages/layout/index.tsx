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
} from "./styles";
import ImgLogo from "../../assets/images/logo.png";
import ImgHome from "../../assets/images/home.png";
import ImgDocument from "../../assets/images/document.png";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  page: string;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, page } = props;
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const goDocuments = () => {
    navigate("/documents");
  };
  return (
    <Container>
      <Header>
        <Frame page={page}>
          <Logo page={page} img={ImgLogo} />
          <LogoBtn page={page}>Toy Document Labeling</LogoBtn>
        </Frame>
        <Frame page={page}>
          <Button page={page} img={ImgHome} onClick={goHome}>
            Home
          </Button>
          <Button page={page} img={ImgDocument} onClick={goDocuments}>
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
