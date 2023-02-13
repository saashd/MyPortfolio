import React from "react";
import {projects} from "../data";
import styled, {css} from "styled-components";
import {Card, CardContent, Divider} from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import {device} from "../utils/responsive";
import {colors} from "../utils/colors";


const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and ${device.mobile} {
    display: grid;
    justify-items: center;
  }
`
const CardComponent = styled(Card)`
  flex: 1;
  min-width: 45%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0.5em;
  font-size: 1.1rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);

  &.override {
    transition: transform 0.5s ease-out, background-color 0.3s ease-out;
    overflow: auto;
    background-color: #111111cf;
    color: #fff;
  }

  &:hover {
    transform: scale(1.05);
    background-color: ${colors.mainColor};
  }

  @media only screen and ${device.mobile} {
    min-width: 100%;
    max-width: 100%;
  }
   @media only screen and ${device.tabletS} and  ${device.tabletL}{
    min-width: 100%;
    max-width: 100%;
  }
`

const Header = styled.div`
  display: flex;
  color: #fff;
  height: 12vh;
  align-items: baseline;
  margin: 2vh 0;
`
const IconsContainer = styled.div`
  display: flex;
justify-content:flex-end;
  width: 30%;
`
const IconWrapper = styled(IconButton)`
  &:hover {
    transform: scale(1.2);
  }

  &.override {
    color: white;
    margin: 0 0 0 0.5vw;
    transition: transform .2s;
  }
`
export default function Projects() {
    return (
        <CardsWrapper>
            {projects.map((project) => (
                <CardComponent
                    key={project.title}
                    className={'override'}
                    variant="outlined">

                    <CardContent>
                            <Header>
                                <h3 style={{width: "65%",textAlign:"left"}}>{project.title}</h3>
                                <IconsContainer>
                                    {
                                        project.github ?
                                            <Grid item xs={1}>
                                                <IconWrapper
                                                    className={'override'}
                                                    aria-label={project.github}
                                                    onClick={() => window.open(project.github)}>
                                                    <GitHubIcon/>
                                                </IconWrapper>
                                            </Grid> : <></>
                                    }
                                    {
                                        project.link ?
                                            <Grid item xs={1}>
                                                <IconWrapper
                                                    className={'override'}
                                                    aria-label={project.link}
                                                    onClick={() => window.open(project.link)}>
                                                    <LanguageIcon/>
                                                </IconWrapper>

                                            </Grid> : <></>
                                    }
                                </IconsContainer>
                            </Header>
                            <Divider sx={{backgroundColor: "white" }}/>
                        <h5>{project.subtitle}</h5>
                        <div style={{textAlign: "justify", margin: "0 1vw"}}
                             dangerouslySetInnerHTML={{__html: project.description}}/>
                    </CardContent>
                </CardComponent>
            ))}
        </CardsWrapper>
    );
}
