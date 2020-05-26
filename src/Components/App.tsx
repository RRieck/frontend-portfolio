import React from "react";
import "../Styles/App.css";
import styled from "styled-components";
import { Header } from "./Header";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Designs } from "../Pages/Designs";
import { AboutMe } from "../Pages/Aboutme";

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
