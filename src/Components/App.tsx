import React from "react";
import logo from "../Assets/logo.png";
import "../Styles/App.css";
import styled from "styled-components";
import { Router } from "react-router";

const AppWrapperDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #282c34;
`;

const HeaderWrapper = styled.div`
  width: calc(100vw - 10px);
  border-bottom: 1px solid #464e5e;
  padding: 5px;
`;

const IconImg = styled.img`
  height: 50px;
`;

export const App = () => {
  return (
    <AppWrapperDiv>
      <HeaderWrapper>
        <IconImg src={logo} alt="logo" />
      </HeaderWrapper>
    </AppWrapperDiv>
  );
};
