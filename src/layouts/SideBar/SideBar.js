import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "./icons.css"
import {Link} from "react-scroll";

const SideBar = () => {
    return (
        <nav className="social">
            <ul>
                <li><a href="https://github.com/saashd" target="_blank"
                       rel="noreferrer">
                    <div><GitHubIcon/></div>
                    <span>Github</span>
                </a></li>
                <li><a href="https://www.linkedin.com/in/alex-druzina" target="_blank"
                       rel="noreferrer">
                    <div><LinkedInIcon/></div>
                    <span>LinkedIn</span>
                </a></li>
                <li>
                        <Link style={{cursor:"pointer"}}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            to="contact">
                            <div><EmailOutlinedIcon/></div>
                            <span>Contact</span>
                        </Link>
                </li>

            </ul>
        </nav>
    )
}
export default SideBar;