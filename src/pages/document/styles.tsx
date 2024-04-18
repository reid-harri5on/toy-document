import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(39, 39, 39);
  height: 100%;
  width: 100%;
`;

export const Header = styled.h1`
  background-clip: text;
  background-image: repeating-linear-gradient(
    5deg,
    rgb(119, 87, 29) 23%,
    rgb(255, 179, 56) 0%,
    rgb(255, 179, 56) 31%
  );
  color: white;
  filter: drop-shadow(black 5px 15px 15px);
  font-family: "Brush Script MT";
  font-size: clamp(3em, 18vw, 6rem);
  font-style: italic;
  font-weight: 900;
  grid-area: overlap;
  letter-spacing: 40px;

  -webkit-text-stroke: 4px transparent;
`;
