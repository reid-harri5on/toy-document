import styled, { keyframes } from "styled-components";
import { COLOR, TIME } from "consts";

export const Container = styled.div<{ $expanded: boolean }>`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 1rem;
  overflow: hidden;
  width: max-content;
  ${({ $expanded }) => `padding: ${$expanded ? "2rem 2rem 2rem 0" : "0px"}; `}
  transition: padding ${TIME.TRANSITION};
`;

export const ExpandButton = styled.button`
  border: none;
  border-radius: 0 50% 50% 0;
  background-color: ${COLOR.Bright20};
  color: white;
  cursor: pointer;
  font-size: 1.75rem;
  font-family: "DM Sans";
  padding: 0.5rem;
  transition: background-color ${TIME.TRANSITION};
  &:hover {
    background-color: ${COLOR.Bright50};
  }
  &:active {
    background-color: ${COLOR.Bright60};
  }
`;

export const Frame = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

export const Board = styled.div`
  background-color: ${COLOR.Bright20};
  max-width: 64rem;
  flex: 1;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  color: white;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border-radius: 1rem;
`;

export const BoardFrame = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  flex: 1;
  padding: 1rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: ${COLOR.Bright30};
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLOR.Bright50};
  }
`;

export const BoardNo = styled.h2``;

export const BoardTitle = styled.h1`
  text-align: center;
`;

export const BoardBody = styled.p``;

const breatheAnimation = keyframes`
  0% { top: 10px }
  50% { top: 5px }
  100% { top: 10px }
`;

export const BoardLink = styled.a`
  border: none;
  border-radius: 16px;
  background-color: hsl(0, 0%, 40%);
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: "DM Sans";
  padding: 5px 20px;
  position: relative;
  &:hover {
    background-color: hsl(0, 0%, 60%);
  }
  &:active {
    background-color: hsl(0, 0%, 80%);
  }
  animation-name: ${breatheAnimation};
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

export const BoardSpace = styled.div`
  min-height: 4rem;
`;

export const Control = styled.div`
  display: flex;
  gap: 0.5rem 2.5rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 64rem;
  justify-content: center;
  div {
    flex: max-content;
    display: flex;
    gap: 0.5rem;
    max-width: 35rem;
  }
`;

export const Split = styled.div`
  flex: 10000;
  @media screen and (max-width: 60rem) {
    flex: 0;
    display: none;
  }
`;

export const Footer = styled.div`
  background-color: black;
  height: 50px;
  width: 100%;
`;

export const Button = styled.button`
  flex: max-content;
  border: none;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: ${COLOR.Bright20};
  color: white;
  cursor: pointer;
  padding: 0 1.5rem;
  transition: background-color ${TIME.TRANSITION};
  font-size: 1.25rem;
  height: 3rem;
  &:hover {
    background-color: ${COLOR.Bright40};
  }
  &:active {
    background-color: ${COLOR.Bright60};
  }
`;
