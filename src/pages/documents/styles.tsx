import styled from "styled-components";
import { COLOR } from "consts";

export const Container = styled.div`
  align-items: center;
  background-color: ${COLOR.Bright20};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Header = styled.h1`
  color: white;
  filter: drop-shadow(black 5px 15px 15px);
  font-family: "Brush Script MT";
  font-size: clamp(3em, 18vw, 6rem);
  font-style: italic;
  font-weight: 900;
  letter-spacing: 40px;
  margin: 0;
  height: 140px;
`;

export const Body = styled.div`
  background-color: white;
  display: flex;
  flex: 1;
  height: calc(100% - 194px);
  width: 100%;
`;

export const Footer = styled.div`
  background-color: ${COLOR.Bright05};
  height: 50px;
  width: 100%;
`;
