import React from "react";
import cv from "../icons/cv.pdf"
import profile from "../icons/profile.png"
import styled from "styled-components";
import {Link} from "react-scroll";
import {device} from "../utils/responsive";

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
`
const ImageItem = styled.img`
    width:30%;
    @media only screen and ${device.mobile} {
    width:50%;
  }
`
export default function About() {
    return (
        <>
            <AvatarWrapper>
                <div>
                    <p style={{textAlign: 'center'}}>
                        Hi there!<br/>
                        My name is <b>Alex</b></p>
                    <p>
                        <a className="resumeBtn"
                           href={cv} download="Alex Druzina - CV.pdf">Resume</a>

                    </p>
                </div>
                <ImageItem  src={profile} alt={"profile photo"}/>
            </AvatarWrapper>

            <LinkWrapper activeClass="active"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         to="skills">
            </LinkWrapper>

        </>

    );
}
