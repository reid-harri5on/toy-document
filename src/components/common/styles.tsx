import styled from "styled-components";
import { ICON } from "assets";
import { COLOR } from "consts";

export const Spinner = styled.div`
  background: url(${ICON.Loading}) no-repeat center;
  background-size: 3.75rem 3.75rem;
  width: 100%;
  min-height: 2.5rem;
`;

export const Spacer = styled.div`
  flex: 10000;
`;

export const NormalButton = styled.button`
  border: none;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: ${COLOR.Bright20};
  color: white;
  cursor: pointer;
  padding: 0 1.5rem;
  transition: all 0.3s;
  font-size: 1rem;
  height: 3rem;
  &:hover {
    background-color: ${COLOR.Bright40};
  }
  &:active {
    background-color: ${COLOR.Bright60};
  }
`;
