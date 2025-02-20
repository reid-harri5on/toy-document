import styled from "styled-components";
import { ICON } from "assets";
import { TIME, COLOR } from "consts";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px) brightness(70%);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div<{ $page: string }>`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  height: 8.75rem;
  box-sizing: border-box;
  width: 100%;
  padding: 0 2rem;
  ${({ $page }) =>
    $page &&
    `background-color: ${$page === "home" ? "transparent" : COLOR.Bright20};`}
`;

export const Body = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  overflow: hidden;
`;

export const LogoIcon = styled.button<{ $page: string }>`
  background: url(${ICON.Logo}) no-repeat center transparent;
  background-size: contain;
  ${({ $page }) =>
    $page &&
    `filter: opacity(60%) brightness(${$page === "home" ? "100%" : "0%"});`}
  border: none;
  height: 74px;
  width: 36px;
  cursor: pointer;
  &:hover {
    ${({ $page }) =>
      $page &&
      `filter: opacity(100%) brightness(${$page === "home" ? "100%" : "0%"});`}
  }
`;

export const Button = styled.button<{ $page: string; $image: string }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({ $page }) =>
    $page &&
    `filter: opacity(60%) invert(${$page === "home" ? "100%" : "0%"});`}
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 100%;
  margin: 0 1rem;
  outline: none;
  padding: 1.75rem 0;
  transition: all ${TIME.TRANSITION}, color 0s, height 0s, background 0s;
  min-width: 36px;
  min-height: 76px;

  &:hover {
    ${({ $page }) =>
      $page &&
      `filter: opacity(100%) invert(${$page === "home" ? "100%" : "0%"});`}
  }

  @media screen and (max-width: 690px) {
    color: transparent;
    font-size: 0;
    ${({ $image }) => $image && `background-image: url(${$image});`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: 36px 36px;
    margin: 0 0.5rem;
  }
`;

export const LogoButton = styled.button<{ $page: string }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({ $page }) =>
    $page &&
    `filter: opacity(60%) invert(${$page === "home" ? "100%" : "0%"});`}

  font-size: 1.125rem;
  font-weight: 900;
  line-height: 100%;
  margin: 0 1rem;
  padding: 1.75rem 0;
  transition: all ${TIME.TRANSITION}, color 0s;
  white-space: nowrap;

  &:hover {
    ${({ $page }) =>
      $page &&
      `filter: opacity(100%) invert(${$page === "home" ? "100%" : "0%"});`}
  }

  ${({ $page }) =>
    "@media screen and (max-width: " +
    ($page === "home" ? "690px" : "960px") +
    `
      ) {
        color: transparent;
        font-size: 0;
        margin: 0;
      }
    `}
`;

export const Group = styled.div<{ $page: string }>`
  align-items: center;
  ${({ $page }) =>
    $page &&
    `background-color: ${$page === "home" ? "rgba(0, 0, 0, 0.5)" : "white"};
    border: 1px solid ${
      $page === "home" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"
    };`}
  border-radius: 20px;

  ${({ $page }) => $page && ``}

  display: flex;
  padding: 0 1rem;
`;

export const Footer = styled.div<{ $page: string }>`
  align-items: center;
  bottom: 0px;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100%;
  ${({ $page }) =>
    $page &&
    `background-color: ${$page === "home" ? "transparent" : COLOR.Bright05};`}
  z-index: 1;
`;

export const Label = styled.div`
  color: rgb(255, 255, 255);
  font-family: objektiv-mk1, sans-serif;
  font-size: 16px;
  line-height: 22px;
`;

export const NLP = styled.h1`
  color: white;
  filter: drop-shadow(black 5px 15px 15px);
  font-family: "Brush Script MT";
  font-size: 5.8rem;
  font-style: italic;
  font-weight: 900;
  letter-spacing: 20px;
  margin: 0 0 0 20px;
  transition: color ${TIME.TRANSITION};
  @media screen and (max-width: 560px) {
    color: transparent;
    font-size: 0;
    letter-spacing: 0;
    margin: 0;
    transition: all 0s ${TIME.TRANSITION}, color ${TIME.TRANSITION};
  }
`;
