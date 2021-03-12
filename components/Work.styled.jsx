import React from "react";
import styled, { keyframes } from "styled-components";
import * as color from "../theme/GlobalColor";
import * as typeface from "../theme/GlobalFont";

export const WorkDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  font-family: ${typeface.poppins};

  border: solid white 2px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0.9;
`;

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: var(--color-projects);
  border-radius: 5px;

  padding: 1rem;
  background: var(--color-projects);
  margin-bottom: 2rem;
  width: 50rem;
  height: 21rem;
`;

export const ProjectLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;
  padding: 2rem;
`;

export const ProjectRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectPic = styled.img`
  object-fit: contain;
`;

export const RightSideDiv = styled.div`
  display: flex;
  flex: 0.1;
  height: 80vh;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const SideLine = styled.a`
  border: 1px solid var(--color-navText);
  border-radius: 5px;

  width: 0;
  height: 22rem;
  &:first-child {
    margin-bottom: 2rem;
  }
  &:last-child {
    margin-top: 2rem;
  }
`;

export const SideName = styled.p`
  transform: rotate(90deg);
  font-size: 20px;
  font-family: ${typeface.monserrat};
  font-weight: ${typeface.$regular};
`;

export const MoreDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const More = styled.a``;
