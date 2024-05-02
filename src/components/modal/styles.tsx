import styled from "styled-components";
import { ICON } from "assets";
import { COLOR } from "consts";

export const Container = styled.div`
  backdrop-filter: brightness(80%) blur(2px);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Frame = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 5px 5px 15px;
  gap: 1rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
`;

export const Heading = styled.h1`
  color: black;
  font-size: 1.5rem;
  margin: 0 1rem;
`;

export const SubHeading = styled.p`
  color: black;
  font-size: 1rem;
  margin: 0;
`;

export const Labels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 2px rgb(60, 60, 60) solid;
  border-radius: 1rem;
  align-content: flex-start;
  width: 100%;
`;

export const Label = styled.button<{ $check: boolean }>`
  ${({ $check }) =>
    `background-color: ${$check ? "rgb(60,60,60)" : "rgb(180, 180, 180)"};`}

  color: white;
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  height: max-content;
  border: none;
  &:hover {
    ${({ $check }) =>
      `background-color: ${$check ? "rgb(80,80,80)" : "rgb(160, 160, 160)"};`}
  }
  &:active {
    ${({ $check }) =>
      `background-color: ${$check ? "rgb(180,180,180)" : "rgb(60, 60, 60)"};`}
  }

  transition: all 0.3s;
`;

export const Button = styled.button`
  color: white;
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  border: none;
  background-color: rgb(60, 60, 60);
  &:hover {
    background-color: rgb(100, 100, 100);
  }
  &:active {
    background-color: rgb(140, 140, 140);
  }

  transition: all 0.3s;
`;

export const CloseBtn = styled.button`
  color: white;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: url(${ICON.Multiply}) no-repeat center;
  background-size: 8px 8px;
  filter: invert(1);
  border-radius: 50%;
  border: none;
  background-color: ${COLOR.Bright70};
  &:hover {
    background-color: ${COLOR.Bright60};
  }
  &:active {
    background-color: ${COLOR.Bright50};
  }

  transition: all 0.3s;
`;

export const Space = styled.div`
  flex: 1;
`;
