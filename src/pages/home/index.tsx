import { Layout } from "pages/layout";
import ImgHomeBack from "../../assets/images/homeback.jpg";
import { Container, Gradient, Heading, SubHeading, Frame } from "./styles";

export const Home = () => {
  return (
    <Container img={ImgHomeBack}>
      <Gradient />
      <Layout>
        <Frame>
          <Heading>Toy Document Labeling App</Heading>
          <SubHeading>
            Tool that enables humans to create training sets for NLP-based
            machine learning models
          </SubHeading>
        </Frame>
      </Layout>
    </Container>
  );
};
