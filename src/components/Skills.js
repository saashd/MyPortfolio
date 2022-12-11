import React from "react";
import "./style.css"
import "../icons/icons_style.css"
import Paper from "@mui/material/Paper";
import {technologies} from "../data";
import Grid from "@mui/material/Grid";
import technion_logo from "../icons/technion.png"

export default function Skills() {
    return (
        <section className="skills">
            <Paper align="center" occupation={3} style={{background: "#ffffff9c", padding: 50}}>
                <h2>Education</h2>
                <div style={{display: "flex"}}>
                    <img width="20px"
                         height="30px"
                         src={technion_logo}
                         alt={"technion logo"}
                         loading="lazy"
                    />
                    <h3>Technion, Haifa | B.Sc in Information Systems</h3>
                </div>
                <div style={{textAlign: "left"}}>
                    <li> During my studies I’ve been awarded 3 times by the Dean of the faculty for my excellence in
                        studies.
                    </li>
                    <li>I’ve been mentoring first-year students in Python for nearly a year.</li>

                </div>
                <br></br>
                <h2>Technical Skills</h2>
                <Grid container spacing={2}>
                    {technologies.map(item => (
                        <Grid item sx={12} key={item.url}>
                            <img className="zoom"
                                 src={item.url}
                                 alt={item.name}
                                 loading="lazy"
                            />
                        </Grid>
                    ))}
                </Grid>
                <p> NumPy, Pandas, and other ML libraries; familiar with PyTorch.</p>
                <p>Some academic experience with <b>Java</b>, <b>C++</b>, <b>C#</b>.</p>


            </Paper>
        </section>
    );
}
