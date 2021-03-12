import React from "react";
import styled, { keyframes } from "styled-components";
import * as color from "../theme/GlobalColor";
import * as typeface from "../theme/GlobalFont";

export const HeroDivDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  color: var(--color-divText);
`;

export const NameContainer = styled.div`
  display: flex;

  max-width: 1040px;
  margin-top: 5rem;

  flex-direction: column;
`;

export const NameTitel = styled.h1`
  line-height: 1.3;
  font-size: 7rem;
  font-weight: ${typeface.$semiBold};
`;

export const NameBeschreibung = styled.p`
  font-size: 18px;
  font-weight: ${typeface.$medium};

  margin-top: 1rem;
`;

export const SloganContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
  align-items: center;
  text-align: center;
  color: var(--color-divText);
`;

export const Slogan = styled.p`
  font-size: 3rem;
  font-weight: ${typeface.$regular};
`;

export const LinieDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Linie = styled.img`
  object-fit: contain;
  margin-left: 15rem;
`;
