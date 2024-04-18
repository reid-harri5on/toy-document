import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px) brightness(70%);
`;

export const Header = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  left: 2rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
`;

export const Body = styled.div`
  align-items: center;
  display: flex;
  max-height: 100%;
  overflow: hidden;
  justify-content: center;
`;

export const Logo = styled.div<{ page: string; img: string }>`
  background-image: url(${(props: { img: string }) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  filter: brightness(
    ${(props: { page: string }) => (props.page === "home" ? `100%` : `0%`)}
  );
  height: 74px;
  width: 36px;
`;

export const Button = styled.button<{ page: string; img: string }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  filter: opacity(60%)
    invert(
      ${(props: { page: string }) => (props.page === "home" ? `100%` : `0%`)}
    );
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 100%;
  margin: 0 1rem;
  outline: none;
  padding: 1.75rem 0;
  transition: all 0.3s, color 0s, height 0s, background 0s;
  min-width: 36px;

  &:hover {
    filter: opacity(100%)
      invert(
        ${(props: { page: string }) => (props.page === "home" ? `100%` : `0%`)}
      );
  }

  @media screen and (max-width: 690px) {
    color: transparent;
    font-size: 0;
    background-image: url(${(props: { img: string }) => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 36px 36px;
    margin: 0 0.5rem;
  }
`;

export const LogoBtn = styled.button<{ page: string }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  filter: opacity(60%)
    invert(
      ${(props: { page: string }) => (props.page === "home" ? `100%` : `0%`)}
    );
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 100%;
  margin: 0 1rem;
  padding: 1.75rem 0;
  transition: all 0.3s, color 0s;
  white-space: nowrap;

  &:hover {
    filter: opacity(100%)
      invert(
        ${(props: { page: string }) => (props.page === "home" ? `100%` : `0%`)}
      );
  }

  @media screen and (max-width: 690px) {
    color: transparent;
    font-size: 0;
    margin: 0;
  }
`;

export const Frame = styled.div<{ page: string }>`
  align-items: center;
  background-color: ${(props: { page: string }) =>
    props.page === "home" ? `rgba(0, 0, 0, 0.5)` : `rgb(255,255,255)`};
  border-radius: 20px;
  border: 1px solid
    ${(props: { page: string }) =>
      props.page === "home" ? `rgba(255, 255, 255, 0.7)` : `rgba(0,0,0,0.7)`};
  display: flex;
  padding: 0 1rem;
`;

export const Footer = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

export const Label = styled.div`
  color: rgb(255, 255, 255);
  font-family: objektiv-mk1, sans-serif;
  font-size: 16px;
  line-height: 22px;
`;
