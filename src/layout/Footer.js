import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from "@mui/material/IconButton";

const Footer = () => {
    return <footer>
        <IconButton aria-label="linkedin"
                    onClick={() => window.open('https://www.linkedin.com/in/alex-druzina', '_blank')}>
            <LinkedInIcon style={{color: "white"}}/>
        </IconButton>
        <IconButton style={{color: "white"}}
                    onClick={() => window.open('https://github.com/saashd', '_blank')}>
            <GitHubIcon/>
        </IconButton>
    </footer>;
};

export default Footer;