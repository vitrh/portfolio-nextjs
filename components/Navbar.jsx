import React, { useState } from "react";
import Link from "next/link";
import {
  NavDiv,
  StyledLink,
  LogoIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  HamburgerMenu,
  HamburgerDiv,
  Menu,
  MenuLink,
} from "./Navbar.styled";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <HamburgerDiv onClick={() => setIsOpen(!isOpen)}>
        <HamburgerMenu />
        <HamburgerMenu />
      </HamburgerDiv>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Home</MenuLink>
        <MenuLink href="">About me</MenuLink>
        <MenuLink href="">Work</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </NavDiv>
  );
};
