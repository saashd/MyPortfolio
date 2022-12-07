import React from "react";
import "./background.css"
import cv from "./cv.pdf"


export default function About() {
    return (
        <section className="about" >
            <p id='head1' className="header">
                Hello, I'm Alex!
            </p>
            <p id='head2' className="header">
                B.Sc in Information Systems from Technion,Israel
            </p>
            <br/>
            <p id='head3' className="header">
                Looking for my first position as a Front End\Full Stuck Developer
                I'm a well-organized person, problem solver with high attention to details.
            </p>
            <a className="button1 btn"
               href={cv} download="Alex Druzina - CV.pdf">Resume</a>
        </section>

    );
}
