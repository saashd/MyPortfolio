import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import React from "react";

function ProjectInfo({project, handleClose, open}) {

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle align="center">
                {project.image ?
                    <img className="img" alt=""
                         src={project.image}
                    />
                    : <></>}

                <a
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