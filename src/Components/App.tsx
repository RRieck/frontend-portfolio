import React from "react";
import "../Styles/App.css";
import styled from "styled-components";
import { Router } from "react-router";
import { Header } from "./Header";

const AppWrapperDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #282c34;
`;

export const App = () => {
  return (
    <AppWrapperDiv>
      <Header />
    </AppWrapperDiv>
  );
};
