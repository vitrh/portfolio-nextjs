import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavDiv,
  HamburgerMenu,
  HamburgerDiv,
  Menu,
  MenuLink,
  Logo,
  NavContainer,
  MenuDiv,
} from "./Navbar.styled";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    close: { opacity: 0, x: "-100%" },
  };

  const openMenu = () => {
    setIsOpen(!isOpen);

    if (isOpen === true) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <NavContainer>
      <NavDiv isOpen={isOpen}>
        <Link href="/" passHref>
          {/* <StyledLink>vinhthong.trinh@hotmail</StyledLink> */}
          <Logo href="/">Vinh Thong Trinh</Logo>
        </Link>

        <HamburgerDiv isOpen={isOpen} onClick={openMenu}>
          <HamburgerMenu />
          <HamburgerMenu />
        </HamburgerDiv>
      </NavDiv>
      <Menu isOpen={isOpen}>
        <MenuDiv>
          {/* <MenuBG isOpen={isOpen} /> */}
          <MenuLink href="">Home</MenuLink>
          <MenuLink href="">About me</MenuLink>
          <MenuLink href="">Work</MenuLink>
          <MenuLink href="">Contact</MenuLink>
        </MenuDiv>
      </Menu>
    </NavContainer>
  );
};
