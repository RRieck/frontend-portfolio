import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";

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

const Link = styled.a`
  text-decoration: none;
  color: white;
  margin: 10px;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <IconImg src={logo} alt="logo" />
      <LinkWrapperDiv>
        <Link href="/designs">Designs</Link>
        <Link href="/aboutme">Über Mich</Link>
      </LinkWrapperDiv>
    </HeaderWrapper>
  );
};
