import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: calc(100vw - 10px);
  border-bottom: 1px solid #464e5e;
  padding: 5px;
`;

const LinkWrapperDiv = styled.div`
  display: flex;
`;

const IconImg = styled.img`
  height: 50px;
  margin-right: 30px;
`;

const LinkSpan = styled.span`
  text-decoration: none;
  text-underline-position: unset;
  color: white;
  margin: 0px 20px;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <IconImg src={logo} alt="logo" />
      </Link>
      <LinkWrapperDiv>
        <Link to="/designs" style={{ textDecoration: "none" }}>
          <LinkSpan>Designs</LinkSpan>
        </Link>
        <Link to="/aboutme" style={{ textDecoration: "none" }}>
          <LinkSpan>Über Mich</LinkSpan>
        </Link>
      </LinkWrapperDiv>
    </HeaderWrapper>
  );
};
