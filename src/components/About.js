import React from "react";
import "./style.css"
import cv from "../icons/cv.pdf"


export default function About() {
    return (
        <section className="about" >
            <p id='head1' className="header">
                Hello, I'm Alex!
            </p>
            <p id='head2' className="header">
                B.Sc in Information Systems from Technion,Israel
            </p>
            <p id='head3' className="header">
                Looking for my first position as a Front End\Full Stuck Developer
            </p>
            <a className="button1 btn"
               href={cv} download="Alex Druzina - CV.pdf">Resume</a>
        </section>

    );
}
