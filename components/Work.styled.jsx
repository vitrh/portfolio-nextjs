import React from "react";
import styled, { keyframes } from "styled-components";
import * as color from "../theme/GlobalColor";
import * as typeface from "../theme/GlobalFont";

export const WorkDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: ${typeface.poppins};
  margin-top: 8rem;
  border: solid white 2px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: var(--color-projects);
  border-radius: 5px;

  padding: 1rem;
  background: linear-gradient(180deg, #0068bb 0%, rgba(82, 5, 225, 0) 100%);
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
