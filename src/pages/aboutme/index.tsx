import React from "react";
import styled from "styled-components";
import aboutmeImage from "../../assets/aboutme.png";

const AboutMeWrapperDiv = styled.div`
  padding: 100px 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  line-height: 32px;
`;

const ImageWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
`;

const PersonalTextWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 1rem
`;

const AboutMeImage = styled.img`
  height: 400px;
  border: 2px solid gray;
  border-radius: 200px;
`;

const TextblockP = styled.p`
  width: 550px;
  margin: 10px;
`;

export const AboutMe = () => {
  return (
    <AboutMeWrapperDiv>
      <ImageWrapperDiv>
        <AboutMeImage src={aboutmeImage} />
      </ImageWrapperDiv>
      <PersonalTextWrapperDiv>
        <TextblockP>
          Hallo, schön das du dich hierhin verirrt hast 😛
        </TextblockP>
        <TextblockP>
          Ich bin Ron und ein passionierter Frontend-Entwickler. Ich begann
          2016 mit meiner Ausbildung als Fachinformatiker für
          Anwendungsentwicklung. Seitdem hatte ich die Möglichkeit in jegliche
          Bereiche der Softwareentwicklung zu schauen. Was mich jedoch am
          meisten interessiert hat, war das Frontend. Nichts hat mich so sehr
          fasziniert, wie das zu bauen, was der Benutzer verwendet um sein Ziel
          zu erreichen.
        </TextblockP>
      </PersonalTextWrapperDiv>
    </AboutMeWrapperDiv>
  );
};
