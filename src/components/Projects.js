import React, {useState} from "react";
import {projects} from "../data";
import "./style.css"
import Button from "@mui/material/Button";
import ProjectInfo from "../layout/ProjectInfo";


export default function Projects() {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    const handleClose = () => {
        setOpen(!open)
    };

    const handleSelected = (currProject) => {
        setOpen(true);
        setSelectedProject(currProject);
    };
    return (
        <section className="projects">

            {projects.map((project) => (
                <div style={{display: "flex"}}
                     key={project.image}>
                    <div>
                        <Button onClick={() => {handleSelected(project)}}>
                            {project.title}
                        </Button>
                        <ProjectInfo project={selectedProject} handleClose={handleClose} open={open}/>


                    </div>

                </div>
            ))}
        </section>
    );
}
