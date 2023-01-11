import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import {Dialog, DialogContent,} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function ProjectInfo({project, handleClose, open}) {

    function replaceURLWithHTMLLinks(text) {
        //eslint-disable-next-line
        let exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        if (text) {
            return text.replace(exp, "<a id='link' target='_blank' href='$1'>click</a>")

        }

    }

    return (
        <Dialog
            BackdropProps={{style: {backgroundColor: 'rgba(255,255,255,0.11)'}}}
            onClose={handleClose} open={open}>
            <DialogTitle align="center"
                         style={{background: "#000000c9"}}>

                <Grid container spacing={2} justifyContent="center"
                      alignItems="center">
                    <Grid item>
                        <a style={{
                            textDecoration: "none",
                            cursor: "pointer"
                        }}
                           target="_blank"
                           rel="noreferrer"
                           href={project.link}>
                            {project.link ?
                                <img
                                    width="20px"
                                    height="20px"
                                    src={require('../icons/web.png')}
                                    alt={''}
                                    loading="lazy"
                                />
                                : <></>}
                        </a>
                    </Grid>
                    <Grid item>
                        <a style={{
                            textDecoration: "none",
                            cursor: "pointer"
                        }}
                           target="_blank"
                           rel="noreferrer"
                           href={project.github}>
                            {project.github ?
                                <img
                                    width="20px"
                                    height="20px"
                                    src={require('../icons/github.png')}
                                    alt={''}
                                    loading="lazy"
                                />
                                : <></>}
                        </a>
                    </Grid>
                    <Grid item>
                        <Typography   variant={"h5"} style={{
                            color: "white",
                            fontFamily: "system-ui"
                        }}>
                            {project.title}
                        </Typography>
                    </Grid>
                </Grid>

            </DialogTitle>
            <DialogContent>

                <h3>
                    {project.subtitle}
                </h3>
                <div style={{whiteSpace: "pre-wrap"}}
                     dangerouslySetInnerHTML={{__html: replaceURLWithHTMLLinks(project.description)}}/>
            </DialogContent>

        </Dialog>
    );
}

export default ProjectInfo;