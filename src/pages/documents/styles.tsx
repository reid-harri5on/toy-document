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

export const Body = styled.div`
  background-color: white;
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
`;
