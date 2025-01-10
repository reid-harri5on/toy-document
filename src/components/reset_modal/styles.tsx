import styled from "styled-components";
import { ICON } from "assets";
import { COLOR, TIME } from "consts";

export const Container = styled.div<{ $visabled: boolean }>`
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
  transition: opacity ${TIME.TRANSITION} ease-in-out;
  ${({ $visabled }) => `opacity: ${$visabled ? 1 : 0};`}
`;

export const Frame = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0.25rem 0.25rem 1rem;
  width: 14rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.5rem;
`;

export const Heading = styled.h1`
  color: black;
  font-size: 1.5rem;
  margin: 0 1rem;
  text-align: center;
`;

export const SubHeading = styled.p`
  color: black;
  font-size: 1rem;
  margin: 0;
  width: 100%;
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

  transition: background-color ${TIME.TRANSITION};
`;

export const CloseButton = styled.button`
  color: white;
  cursor: pointer;
  min-width: 1.25rem;
  height: 1.25rem;
  background: url(${ICON.Multiply}) no-repeat center;
  background-size: 0.5rem 0.5rem;
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

  transition: background-color ${TIME.TRANSITION};
`;
