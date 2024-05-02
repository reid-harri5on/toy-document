import styled from "styled-components";
import { COLOR } from "consts";

export const Container = styled.div<{ $img: string }>`
  ${({ $img }) => $img && `background-image: url(${$img});`}
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const Gradient = styled.div`
  background-image: ${COLOR.Grad};
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
  color: white;
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
  color: white;
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
