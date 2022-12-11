import React, {useState} from "react";
import {projects} from "../data";
import "./style.css";
import ProjectInfo from "../layout/ProjectInfo";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";


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
            <Paper occupation={3} style={{background:"#ffffff1a"}}>
                {projects.map((project) => (
                    <div
                        style={{display: "flex", padding: "50px"}}
                         key={project.image}>
                        <Link
                            style={{color: "white", textDecoration: "none", cursor: "pointer"}}
                            onClick={() => {
                                handleSelected(project)
                            }}>
                            <Typography variant="h5">
                                {project.title}
                            </Typography>
                        </Link>


                        <ProjectInfo project={selectedProject} handleClose={handleClose} open={open}/>
                    </div>
                ))}
            </Paper>
        </section>
    );
}
