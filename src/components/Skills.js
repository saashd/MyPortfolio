import React from "react";
import {technologies} from "../data";
import Grid from "@mui/material/Grid";
import Tooltip from '@mui/material/Tooltip';
import styled from "styled-components";
import {device} from "../utils/responsive";

const ImageWrapper = styled.img`
  -webkit-filter: brightness(0);
  filter: brightness(0);
  padding: 10px;
  transition: transform .2s;
  width: 3em;
  height: 3em;
  margin: 0 auto;

  @media only screen and ${device.mobile} {
    width: 1em;
    height: 1em;
  }
  @media only screen and ${device.tabletS} and ${device.tabletL} {
    width: 2em;
    height: 2em;
  }

  &:hover {
    transform: scale(1.5);
  }
`
export default function Skills() {
    return (
        <div style={{textAlign:"justify"}}>
            <p>I'm a recent B.Sc graduate in Information Systems from the Technion, Israel</p>
            <p>During my studies I’ve been awarded 3 times by the Dean of the faculty for my excellence</p>
            <p>I have about two years of experience with the following tools and technologies</p>
            <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
                {technologies.map(item => (
                    <Grid item key={item.url}>
                        <Tooltip title={item.name}>
                        <ImageWrapper
                            src={item.url}
                            alt={item.name}
                            loading="lazy"
                        /></Tooltip>
                    </Grid>
                ))}
            </Grid>
            <p>I'm also familiar with Java, TypeScript, C#</p>
        </div>
    )
}
