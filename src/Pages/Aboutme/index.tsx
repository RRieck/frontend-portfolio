import React from "react";
import styled from "styled-components";
import aboutmeImage from "../../Assets/aboutme.png";

const AboutMeWrapperDiv = styled.div`
  padding: 10px;
`;

const ImageWrapperImg = styled.img`
  height: 200px;
  border: 2px solid gray;
  border-radius: 200px;
`;

export const AboutMe = () => {
  return (
    <AboutMeWrapperDiv>
      <ImageWrapperImg src={aboutmeImage}></ImageWrapperImg>
    </AboutMeWrapperDiv>
  );
};
