import React from "react";
import Link from "next/link";
import {
  NavDiv,
  StyledLink,
  LogoIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
} from "./Navbar.styled";

export const Navbar = () => {
  return (
    <NavDiv>
      <Link href="/" passHref>
        {/* <StyledLink>vinhthong.trinh@hotmail</StyledLink> */}
        <LogoIcon />
      </Link>
      <a href="https://www.instagram.com/vnhtrnh/">
        <InstagramIcon />
      </a>
      <a href="https://www.linkedin.com/in/vinh-thong-trinh-556b63202/">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/vitrh">
        <GithubIcon />
      </a>
    </NavDiv>
  );
};
