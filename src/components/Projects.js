import React, {useState} from "react";
import {projects} from "../data";
import "./style.css";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ProjectInfo from "../layout/ProjectInfo";

export default function Projects() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(!open)
    };
    return (
        <section className="projects">
            <Paper occupation={3} style={{background: "#ffffff1a"}}>
                <List>
                    {projects.map((project) => (
                        <ProjectInfo project={project} handleClose={handleClose}/>
                    ))} </List>
            </Paper>
        </section>
    );
}
