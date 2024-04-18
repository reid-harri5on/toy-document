import styled from "styled-components";

export const Container = styled.div<{ img: string }>`
  width: 100%;
  height: 100%;
  background: url(${(props: { img: string }) => props.img});
  background-size: cover;
  background-position: center;
  filter: blur(7px) brightness(0.7);
`;
