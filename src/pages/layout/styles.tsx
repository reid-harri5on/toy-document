import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px) brightness(70%);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Body = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Logo = styled.div<{ img: string }>`
  background-image: url(${(props: { img: string }) => props.img});
  background-position: center;
  background-size: cover;
  height: 36px;
  width: 36px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 100%;
  margin: 0 1rem;
  padding: 1.75rem 0;

  background-color: transparent;
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    color: rgb(255, 255, 255);
  }
`;

export const Frame = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  display: flex;
  padding: 0 1rem;
  margin: 2rem;
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
