import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import styled, { keyframes } from "styled-components";
import * as color from "../theme/GlobalColor";
import * as typeface from "../theme/GlobalFont";

export const NavDiv = styled.nav`
  background: var(--color-secondaryBackground);

  display: flex;
  flex-wrap: wrap;

  padding: 0 2rem;

  justify-content: space-between;
  align-items: center;
`;

export const HamburgerMenu = styled.a`
  height: 2px;
  width: 2rem;

  border: 1px solid var(--color-navText);
  border-radius: 5px;
  margin-bottom: 0.5rem;

  transition: all 200ms ease-in-out;
`;

export const HamburgerDiv = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;

  ${HamburgerMenu} {
    &:first-child {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(7px, -1px)" : "rotate(0)"};
    }
    &:last-child {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(8px, 0px)" : "rotate(0)"};
    }
  }
`;

//test2
export const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  transition: all 1s ease-in-out;

  overflow: hidden;
  flex-direction: column;

  width: 95vw;

  height: ${({ isOpen }) => (isOpen ? "94.8vh" : "0")};

  background-color: var(--color-secondaryBackground);
`;

export const MenuLink = styled.a`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 5rem;

  color: var(--color-navText);

  &:hover {
    color: ${color.$gray};
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &:first-child {
    margin-top: 8rem;
  }
`;

export const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

export const Logo = styled.a`
  cursor: pointer;
  color: var(--color-navText);

  font-size: 2rem;
`;

export const MenuBG = styled.div`
  height: 100%;

  min-width: ${({ isOpen }) => (isOpen ? "100vw" : "0")};
  background: ${color.$darkblue};

  transition: all 2s ease-in-out;
  z-index: 1000;
`;
