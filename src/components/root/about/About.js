import React, { Fragment, useState } from 'react';
import './about.css';
export const About = () => {
    const [change, setChange] = useState(false);

    const handleClick = () => {
        const temp = change;
        setChange(!temp);
    }

    return (
        <Fragment>
            <div className="about">
                {!change ? <button className="change-button" onClick={handleClick}>Change Color</button> : <button className="change-button-green" onClick={handleClick}>Change Color</button>}
                {!change ? <h1 className="about-header">Luka Gagnidze</h1> : <h1 className="about-header-green">Luka Gagnidze</h1>}
                {!change ?<p className="about-position">Front-End Developer</p>:<p className="about-position-green">Front-End Developer</p>}
                {!change ? <p className="about-summary">I’m  responsible and hard-working IT person from Tbilis, Georgia. I am fond of writing clear and high-quality code. </p> :<p className="about-summary-green">I’m  responsible and hard-working IT person from Tbilis, Georgia. I am fond of writing clear and high-quality code. </p> }

                {!change ? <h1 className="about-header about-detail">Personal Details</h1> : <h1 className="about-header-green about-detail-green">Personal Details</h1>}
                {!change ?<div className="flexit">
                    <p>luka.gagnidze.1@btu.edu.ge</p>
                    <p style={{marginTop: "-4px"}}>Tbilisi, Georgia</p>
                </div> :<div className="flexit-green">
                    <p>luka.gagnidze.1@btu.edu.ge</p>
                    <p style={{marginTop: "-4px"}}>Tbilisi, Georgia</p>
                </div>}
                
                {!change ? <h1 className="about-header">Education</h1> : <h1 className="about-header-green">Education</h1>}
                {!change ?<div className="flexit">
                    <p>Informational Technologies - Business and Technology University</p>
                    <p style={{marginTop: "-12px"}}>Bachelor's Degree 2017 - 2021</p>
                    <p style={{color: "#008c45", marginTop: "4px"}}>GPA - 3.53</p>
                </div> :<div className="flexit-green">
                    <p>Informational Technologies - Business and Technology University</p>
                    <p style={{marginTop: "-12px"}}>Bachelor's Degree 2017 - 2021</p>
                    <p style={{color: "#008c45", marginTop: "4px"}}>GPA - 3.53</p>
                </div> }
                {!change ? <h1 className="about-header">Professional Skills</h1> : <h1 className="about-header-green">Professional Skills</h1>}
                {!change ? <div className="flexit">
                    <p>HTML, CSS, REACT JS, Java, Spring Boot, PL SQL </p>
                    <p style={{marginTop: "-12px"}}>ajax, jquery, Spring Data JPA</p>
                    <p style={{marginTop: "-12px"}}>JAX-RS, JAX-WS</p>
                    <p style={{marginTop: "-12px"}}>Git, Gson, Json, XML</p>
                </div> :<div className="flexit-green">
                    <p>HTML, CSS, REACT JS, Java, Spring Boot, PL SQL </p>
                    <p style={{marginTop: "-12px"}}>ajax, jquery, Spring Data JPA</p>
                    <p style={{marginTop: "-12px"}}>JAX-RS, JAX-WS</p>
                    <p style={{marginTop: "-12px"}}>Git, Gson, Json, XML</p>
                </div> }
            </div>
        </Fragment>
    )
} 

export default About;