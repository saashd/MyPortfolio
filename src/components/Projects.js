import React from "react";
import {projects} from "../data";
import "./style.css"


export default function Projects() {
    return (
        <section className="projects">
            <div
                style={{
                    overflow:"auto",
                width: "70%",
                height: "60vh"}}>
                {projects.map((project) => (
                    <div style={{display: "flex"}}
                         key={project.image}>

                        <img
                            style={{marginTop: "20px", marginRight: "20px"}}
                            alt="gallery"
                            src={project.image}
                        />
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                style={{color: "white"}}
                                href={project.link}>
                                <h1>
                                    {project.title}
                                </h1>
                            </a>

                            <h2>
                                {project.subtitle}
                            </h2>
                            <p>{project.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
