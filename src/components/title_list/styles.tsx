import styled from "styled-components";
import { COLOR, TIME } from "consts";

export const Container = styled.div<{ $expanded: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: ${({ $expanded: $selected }) => ($selected ? "60px" : "100%")};
  height: 100%;
  min-width: 5.75rem;
  gap: 1rem;
  overflow: hidden auto;
  padding: 1rem;
  transition: width ${TIME.TRANSITION};

  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${COLOR.Bright60};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLOR.Bright30};
    &:hover {
      background-color: ${COLOR.Bright20};
    }
    &:active {
      background-color: ${COLOR.Bright10};
    }
  }
`;

export const TitleItem = styled.button`
  align-items: center;
  background-color: ${COLOR.Bright20};
  border-radius: 1rem;
  box-sizing: border-box;
  border: 2px solid ${COLOR.Bright20};
  color: white;
  cursor: pointer;
  display: flex;
  padding: 0.5rem 0;
  transition: color ${TIME.TRANSITION}, background-color ${TIME.TRANSITION};
  white-space: nowrap;
  width: 100%;
  &:hover {
    background-color: ${COLOR.Bright60};
  }
  &:active {
    background-color: white;
    color: ${COLOR.Bright20};
  }
  &:disabled {
    background-color: white;
    color: ${COLOR.Bright20};
  }
  #id {
    font-size: 1.75rem;
    min-width: 3rem;
    font-weight: 700;
  }
  #title {
    font-size: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
