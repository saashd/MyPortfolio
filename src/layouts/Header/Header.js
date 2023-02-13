import React from "react";
import styled from 'styled-components';
import {device} from "../../utils/responsive"
import HeaderSectionsList from "./HeaderSectionsList";
import {colors} from "../../utils/colors"

const Container = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  position: sticky;
  top: -5px;
  z-index: 3;
  height: 10vh;
  min-height: 10vh;
  background-color: ${colors.mainColor};
  color: white;
  box-shadow: 0 0.125rem 0.15rem 0 ${colors.mainColor};
  @media only screen and ${device.mobile} {
    overflow: auto;
    min-height: 100vh;
    left: 0;
    width: 4vw;
    position: fixed;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    background-color: ${colors.backgroundColor};
    color: white;
    box-shadow: 0 0.125rem 0.15rem 0 ${colors.backgroundColor};
    @media only screen and ${device.mobile} {
      font-weight: 400;
    }
  }
`


const NavContainerActions = styled.nav`
  display: inline-flex;
  flex-flow: row nowrap;
  flex: 1;
  justify-content: center;
`

const List = styled.ul`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  list-style: none;
  padding: 0;
  width: 70vw;
  justify-content: space-evenly;
  @media only screen and ${device.mobile} {
    font-size: 0.7rem;
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
`


export default function Header() {
    return (

        <Container>
            <NavContainerActions>
                <List>
                    <HeaderSectionsList/>
                </List>
            </NavContainerActions>
        </Container>
    );
}
