import styled from "styled-components";

export const Container = styled.div<{ img: string }>`
  background-image: url(${(props: { img: string }) => props.img});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const Gradient = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0) 92%);
  bottom: 0px;
  height: 200px;
  position: absolute;
  width: 100%;
`;

export const Frame = styled.div`
  align-items: center;
  align-self: center;
  display: block;
  margin: 0 120px;
`;

export const Heading = styled.h1`
  color: rgb(255, 255, 255);
  display: block;
  font-family: objektiv-mk1, sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  max-width: 800px;
  text-align: center;
`;

export const SubHeading = styled.h2`
  color: rgb(255, 255, 255);
  display: block;
  font-family: objektiv-mk1, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  max-width: 800px;
  text-align: center;
`;
