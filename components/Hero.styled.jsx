import React from "react";
import styled, { keyframes } from "styled-components";
import * as color from "../theme/GlobalColor";
import * as typeface from "../theme/GlobalFont";

export const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  color: var(--color-divText);

  margin-left: 100px;
  margin-right: 100px;
`;

export const NameContainer = styled.div`
  display: flex;

  max-width: 1040px;
  margin-top: 5rem;

  flex-direction: column;
`;

export const NameTitel = styled.h1`
  font-size: 4.375rem;
  font-weight: ${typeface.$semiBold};
`;

export const NameBeschreibung = styled.p`
  font-size: 18px;
  font-weight: ${typeface.$medium};

  margin-top: 4rem;
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
  font-size: 2.57rem;
  font-weight: ${typeface.$regular};
`;
