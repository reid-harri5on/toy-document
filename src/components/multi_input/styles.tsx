import styled from "styled-components";
import { COLOR } from "consts";
import { ICON } from "assets";

export const Container = styled.div`
  position: relative;
  border-radius: 1rem;
  box-sizing: border-box;
  border: 2px ${COLOR.Bright50} solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem;
  width: 100%;
`;

export const LabelItem = styled.div`
  position: relative;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  height: 2rem;
  color: black;
  background-color: ${COLOR.Bright50};
  display: grid;
  grid-template-columns: auto 1.25rem;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  flex: max-content;
  max-width: 100%;
  overflow: hidden;
  cursor: pointer;
  button {
    cursor: pointer;
    border-radius: 50%;
    border: none;
    height: 1.25rem;
    background: white url(${ICON.Multiply}) no-repeat center;
    background-size: 0.5rem 0.5rem;

    &:hover {
      background-color: ${COLOR.Bright80};
    }
    &:active {
      background-color: ${COLOR.Bright60};
    }
  }
  p {
    margin: 0;
    flex: 1;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const LabelInput = styled.input`
  outline: none;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  width: 7rem;
  box-sizing: border-box;
  height: 2rem;
`;
