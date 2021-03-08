import styled from "styled-components";
import Instagram from "./Icons/Instagram";
import Logo from "./Icons/Logo";
import LinkedIn from "./Icons/LinkedIn";
import Github from "./Icons/Github";

export const NavDiv = styled.nav`
  background: #072142;
  color: #fff;

  display: flex;
  height: 50px;

  padding: 0 5rem 0 5rem;

  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

export const LogoIcon = styled(Logo)`
  margin: 0 auto;
`;

export const InstagramIcon = styled(Instagram)`
  margin-right: 2rem;
`;
export const LinkedinIcon = styled(LinkedIn)`
  margin-right: 2rem;
`;

export const GithubIcon = styled(Github)`
  margin-right: 2rem;
`;

export const MenuButton = styled.div``;
