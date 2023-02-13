import React from "react";
import {Link} from "react-scroll";
import styled from 'styled-components';
import {device} from "../../utils/responsive";

const ListItem = styled.li`
  cursor: pointer;
  @media only screen and ${device.mobile} {
    transform: rotate(90deg);
  }

  &:hover {
    text-decoration: none;
    font-weight: bold;
  }
`

export default function HeaderSectionsList() {

    return (
        <>
            <ListItem>
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    to="about">
                    ABOUT
                </Link>
            </ListItem>
            <ListItem>
                <Link activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      to="skills">
                    SKILLS
                </Link>
            </ListItem>
            <ListItem>
                <Link activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      to="projects">
                    PROJECTS
                </Link>
            </ListItem>
            <ListItem>
                <Link activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      to="hobbies">
                    HOBBIES
                </Link>
            </ListItem>
            <ListItem>
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    to="contact">
                    CONTACT ME
                </Link>
            </ListItem>
        </>
    );
}
