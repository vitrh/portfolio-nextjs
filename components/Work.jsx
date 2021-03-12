import React from "react";
import {
  MoreDiv,
  ProjectContainer,
  ProjectDiv,
  ProjectLeft,
  ProjectPic,
  ProjectRight,
  RightSideDiv,
  WorkDiv,
  More,
  SideLine,
  SideName,
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
            <p>"......." could be your website. Made with React.js & Nextjs</p>
          </ProjectLeft>
        </ProjectDiv>
        <MoreDiv>
          <More>more...</More>
        </MoreDiv>
      </ProjectContainer>

      <RightSideDiv>
        <SideLine></SideLine>
        <SideName>Work</SideName>
        <SideLine></SideLine>
      </RightSideDiv>
    </WorkDiv>
  );
};
