import React from "react";
import {
  ProjectContainer,
  ProjectDiv,
  ProjectLeft,
  ProjectPic,
  ProjectRight,
  WorkDiv,
} from "./Work.styled";

export const Work = () => {
  return (
    <WorkDiv>
      <ProjectContainer>
        <ProjectDiv>
          <ProjectLeft>
            <p>"......." is my first website. Made with React.js & Nextjs</p>
          </ProjectLeft>
          <ProjectRight>
            <ProjectPic src="beispielProject1.svg" />
          </ProjectRight>
        </ProjectDiv>
        <ProjectDiv>
          <ProjectRight>
            <ProjectPic src="beispielProject1.svg" />
          </ProjectRight>
          <ProjectLeft>
            <p>"......." is my first website. Made with React.js & Nextjs</p>
          </ProjectLeft>
        </ProjectDiv>
      </ProjectContainer>
    </WorkDiv>
  );
};
