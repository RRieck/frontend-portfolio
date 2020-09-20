import React from "react";
import "../styles/App.css";
import styled from "styled-components";
import { Header } from "./Header";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Designs } from "../pages/designs";
import { AboutMe } from "../pages/aboutme";

const AppWrapperDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #282c34;
`;

export const App = () => {
  return (
    <AppWrapperDiv>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/designs">
            <Designs />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppWrapperDiv>
  );
};
