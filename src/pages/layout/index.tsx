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
} from "./styles";
import ImgLogo from "../../assets/images/logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <Container>
      <Header>
        <Frame>
          <Logo img={ImgLogo} />
          <Button>Toy Document Labeling</Button>
        </Frame>
        <Frame>
          <Button>Home</Button>
          <Button>Documents</Button>
        </Frame>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <Label>Copyright © 2024</Label>
      </Footer>
    </Container>
  );
};
