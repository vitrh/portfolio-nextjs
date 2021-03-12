import React from "react";
import {
  HeroDiv,
  Linie,
  LinieDiv,
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
          <LinieDiv>
            <NameTitel>
              VINH
              <br />
              THONG <br />
              TRINH
            </NameTitel>

            <Linie src="Linie.svg" />
          </LinieDiv>

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
