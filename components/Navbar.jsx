import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavDiv,
  HamburgerMenu,
  HamburgerDiv,
  Menu,
  MenuLink,
  SocialMedia,
  Logo,
  Instagram,
  Github,
  LinkedIn,
} from "./Navbar.styled";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    close: { opacity: 0, x: "-100%" },
  };

  return (
    <NavDiv>
      <Link href="/" passHref>
        {/* <StyledLink>vinhthong.trinh@hotmail</StyledLink> */}
        <Logo>🚀</Logo>
      </Link>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      ></motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <HamburgerDiv isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <HamburgerMenu />
          <HamburgerMenu />
        </HamburgerDiv>
      </motion.div>
      <motion.nav anminate={isOpen ? "open" : "closed"} variants={variants}>
        <Menu isOpen={isOpen}>
          {/* <MenuBG isOpen={isOpen} /> */}
          <MenuLink href="">Home</MenuLink>
          <MenuLink href="">About me</MenuLink>
          <MenuLink href="">Work</MenuLink>
          <MenuLink href="">Contact</MenuLink>
        </Menu>
      </motion.nav>
    </NavDiv>
  );
};
