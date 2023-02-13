import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import styled from 'styled-components';
import {Divider} from "@mui/material";
import SideBar from "../layouts/SideBar/SideBar";
import Hobbies from "../components/Hobbies/Hobbies";
import Header from "../layouts/Header/Header";
import "../components/style.css"
import {device} from "../utils/responsive";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  text-align: center;
`

const ComponentsWrapper = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  z-index: 2;
  background-color: #ffffffde;
  margin: 5vh 15vw 5vh 15vw;
  padding: 0 5vw;
  border-radius: 1em;
  @media only screen and ${device.mobile} {
     margin: 2vh 10vw 5vh 8vw;
    }
`

const Section = styled.section`
  display: grid;
  font-size: 32px;
  margin: 2vh 0;
  min-height: 100vh;

  &.about {
    min-height: 40vh;
    @media only screen and ${device.mobile} {
      min-height: 20vh;
    }
  }
`


const DividerComponent = styled(Divider)`
  margin: 5vh 0;
  width: 100%;
`

export default function LandingPage() {
    return (
        <Container>
            <SideBar/>
            <Header/>
            <ComponentsWrapper>
                <Section className={"about"} id="about"><About/></Section>
                <DividerComponent/>
                <Section id="skills"><Skills/></Section>
                <DividerComponent/>
                <Section id="projects"><Projects/></Section>
                <DividerComponent/>
                <Section id="hobbies"><Hobbies/></Section>
                <DividerComponent/>
                <Section id="contact"><Contact/></Section>
            </ComponentsWrapper>
        </Container>
    );
}
