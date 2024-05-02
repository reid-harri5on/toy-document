import { Layout } from "pages/layout";
import { BG } from "assets";
import { Container, Gradient, Heading, SubHeading, Frame } from "./styles";

export const Home = () => {
  return (
    <Container $img={BG.Home}>
      <Gradient />
      <Layout page="home">
        <Frame>
          <Heading>Toy Document Labeling App</Heading>
          <SubHeading>
            Tool that enables humans to create training sets for NLP-based
            machine learning models
          </SubHeading>
        </Frame>
        <Gradient />
      </Layout>
    </Container>
  );
};
