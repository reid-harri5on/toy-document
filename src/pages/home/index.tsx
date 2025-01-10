import { Layout } from "pages/layout";
import { BG } from "assets";
import { Container, Gradient, Title, SutTitle, Frame } from "./styles";

export const HomePage = () => {
  return (
    <Container $img={BG.Home}>
      <Layout page="home">
        <Frame>
          <Title>Toy Document Labeling App</Title>
          <SutTitle>
            Tool that enables humans to create training sets for NLP-based
            machine learning models
          </SutTitle>
        </Frame>
        <Gradient />
      </Layout>
    </Container>
  );
};
