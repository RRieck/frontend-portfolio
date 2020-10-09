import React, { useEffect } from "react";
import sc from "styled-components";

const LandingPageWrapperDiv = sc.div`
  width: 100%;
  height: 100vh;
  position fixed;
  filter: grayscale(0%);
  background-image: url('./background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
`;

export const LandingPage = () => {
  return <LandingPageWrapperDiv></LandingPageWrapperDiv>;
};
