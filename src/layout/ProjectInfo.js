import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function ProjectInfo({project}) {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(!open)
    };

    function replaceURLWithHTMLLinks(text) {
        //eslint-disable-next-line
        let exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        if (text) {
            return text.replace(exp, "<a id='link' target='_blank' href='$1'>click</a>")

        }

    }
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={1}>
                    <IconButton  onClick={handleClose} style={{color: "white"}}>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </IconButton>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant={"h5"} style={{
                        color: "white",
                        fontFamily: "system-ui"
                    }}>
                        {project.title}
                    </Typography>
                </Grid>
                {
                    project.github ?
                        <Grid item xs={1}>
                            <IconButton
                                className="zoom"
                                aria-label={project.github}
                                onClick={() => window.open(project.github)}
                                style={{color: "white"}}>
                                <GitHubIcon/>
                            </IconButton>

                        </Grid> : <></>
                }
                {
                    project.link ?
                        <Grid item xs={1}>
                            <IconButton
                                className="zoom"
                                aria-label={project.link}
                                onClick={() => window.open(project.link)}
                                style={{color: "white"}}>
                                <LanguageIcon/>
                            </IconButton>

                        </Grid> : <></>
                }
            </Grid>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Typography variant={"body1"} style={{
                    color: "white",
                    fontFamily: "system-ui",
                    margin: "5%"
                }}>
                    <h3>{project.subtitle}</h3>
                    <div style={{whiteSpace: "pre-wrap"}}
                         dangerouslySetInnerHTML={{__html: replaceURLWithHTMLLinks(project.description)}}/>
                </Typography>
            </Collapse>
        </div>
    );
}

export default ProjectInfo;