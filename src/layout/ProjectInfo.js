import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import {Dialog, DialogContent,} from "@mui/material";


function ProjectInfo({project, handleClose, open}) {

    return (
        <Dialog
            BackdropProps={{style: {backgroundColor: 'rgba(255,255,255,0.11)'}}}
            onClose={handleClose} open={open}>
            <DialogTitle align="center"
            style={{background:"#000000c9"}}>
                {project.image ?
                    <img className="img" alt=""
                         src={project.image}
                    />
                    : <></>}

                <a
                    className="zoom"
                    style={{
                        color: "white",
                        fontFamily: "system-ui",
                        fontSize: "x-large",
                        textDecoration: "none",
                        cursor: "pointer"
                    }}
                    target="_blank"
                    rel="noreferrer"
                    href={project.link}>
                    {project.title}
                </a>
            </DialogTitle>
            <DialogContent>

                <h3>
                    {project.subtitle}
                </h3>
                <p style={{whiteSpace: "pre-wrap"}}>{project.description}</p>
            </DialogContent>

        </Dialog>
    );

}

export default ProjectInfo;