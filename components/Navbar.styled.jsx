import styled from "styled-components";
import Instagram from "./Icons/Instagram";
import Logo from "./Icons/Logo";
import LinkedIn from "./Icons/LinkedIn";
import Github from "./Icons/Github";
import * as color from "../theme/GlobalColor";

export const NavDiv = styled.nav`
  background: ${color.$darkblue};
  color: ${color.$white};

  display: flex;
  flex-wrap: wrap;

  height: 50px;

  padding: 0 2rem;

  justify-content: space-between;
  align-items: center;
`;

export const HamburgerDiv = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const HamburgerMenu = styled.span`
  height: 2px;
  width: 2rem;

  border: 1px solid ${color.$white};
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${color.$white};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: ${color.$gray};
  }
`;

export const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

export const LogoIcon = styled(Logo)`
  margin: 0 auto;
`;

export const InstagramIcon = styled(Instagram)`
  margin-right: 1rem;
`;
export const LinkedinIcon = styled(LinkedIn)`
  margin-right: 1rem;
`;

export const GithubIcon = styled(Github)`
  margin-right: 1rem;
`;
