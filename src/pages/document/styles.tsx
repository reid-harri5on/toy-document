import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: hsl(0, 0%, 15%);
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

export const Titles = styled.div<{ $selected: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${({ $selected }) => `width: ${$selected ? "60px" : "100%"};`}
  max-height: calc(100% - 32px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 16px;
  transition: all 0.3s;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: hsl(0, 0%, 80%);
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 40%);
  }
`;

export const TitleItm = styled.button`
  align-items: center;
  background-color: hsl(0, 0%, 25%);
  border-radius: 16px;
  border: 2px solid hsl(0, 0%, 25%);
  color: white;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  transition: all 0.3s;
  white-space: nowrap;
  width: 100%;
  &:hover {
    background-color: hsl(0, 0%, 50%);
  }
  &:active {
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 10%);
  }
  &:disabled {
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 10%);
  }
  #id {
    font-size: 1.75rem;
    width: 48px;
    font-weight: 700;
  }
  #title {
    font-size: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Editor = styled.div<{ $selected: boolean }>`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 16px;
  transition: all 0.3s;
  ${({ $selected }) =>
    `width: ${$selected ? "100%" : "0px"};
    padding: ${$selected ? "32px 32px 32px 0px" : "0px"};`}
`;

export const BackBtn = styled.button`
  border: none;
  border-radius: 0 50% 50% 0;
  background-color: hsl(0, 0%, 25%);
  color: white;
  cursor: pointer;
  font-size: 1.75rem;
  font-family: "DM Sans";
  padding: 0.5rem;
  transition: all 0.3s;
  &:hover {
    background-color: hsl(0, 0%, 50%);
  }
  &:active {
    background-color: hsl(0, 0%, 75%);
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
  background-color: hsl(0, 0%, 25%);
  border-radius: 16px;
  max-width: 1000px;
  overflow: auto;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: white;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 40%);
  }
  &::-webkit-overflow-scrolling {
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
  min-height: 60px;
`;

export const Control = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1064px;
`;

export const EditBtn = styled.button`
  border: none;
  border-radius: 16px;
  background-color: hsl(0, 0%, 25%);
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: "DM Sans";
  height: 40px;
  padding: 0 20px;
  transition: all 0.3s;
  &:hover {
    background-color: hsl(0, 0%, 50%);
  }
  &:active {
    background-color: hsl(0, 0%, 75%);
  }
`;

export const Split = styled.div`
  flex: 1;
`;

export const Footer = styled.div`
  background-color: black;
  height: 50px;
  width: 100%;
`;

export const BoardEdit = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const BoardLabel = styled.div``;

export const BoardFrame = styled.div`
  border-radius: 16px;
  border: 2px white solid;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  width: 100%;
`;

export const Edit = styled.input`
  outline: none;
  padding: 6px 10px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  width: 120px;
`;

export const Label = styled.div`
  padding: 4px 10px;
  border-radius: 8px;
  color: black;
  background-color: hsl(0, 0%, 50%);
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  button {
    border-radius: 50%;
    border: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover {
      background-color: hsl(0, 0%, 80%);
    }
    &:active {
      background-color: hsl(0, 0%, 60%);
    }
  }
`;
