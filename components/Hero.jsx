import React from "react";
import {
  HeroDiv,
  NameBeschreibung,
  NameContainer,
  NameTitel,
  Slogan,
  SloganContainer,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <>
      <HeroDiv>
        <NameContainer>
          <NameTitel>
            VINH <br />
            THONG <br />
            TRINH
          </NameTitel>
          <NameBeschreibung>
            web developer <br /> full-stack engineer.
          </NameBeschreibung>
        </NameContainer>
      </HeroDiv>
      <SloganContainer>
        <Slogan>
          Creating high performance <br />
          unique Websites.
          <br />
          Is what I do.
        </Slogan>
      </SloganContainer>
    </>
  );
};
