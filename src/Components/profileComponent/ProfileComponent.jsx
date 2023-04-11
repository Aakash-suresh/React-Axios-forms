import React, { Component } from 'react';
import './profileComponent.css';
// import Photo from '../profileComponent/Photo';
import Photo from '../profileComponent/Photo.png';
import CalculatorComponent from '../calculatorComponent/calculatorComponent';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Link } from 'react-router-dom';
export class ProfileComponent extends Component {
  render() {
    return (

    <div class="container_1">
        <div class="profile">
            <img height="100%" width="100%" src={Photo}/>
        </div>
        <div class="header">
                <strong>Aakash S</strong> 
                <br/>
                Ⅱ-year AI&ML
        </div>
        <div class="content_1">
            <div class="sideleft">
                <div class="sideleft-content">
                        <h3><strong>Personal Info</strong><hr/></h3>
                        <h5><strong>E-mail</strong></h5>
                        aakashakshith455@gmail.com
                        <h5><strong>Phone</strong></h5>
                        6383960184
                        <h5><strong>Citizenship</strong></h5>
                        Indian
                        <br/><br/>

                        <h3><strong>Skills</strong><hr/></h3>
                        <ul>
                            <li>Designing</li>
                            <li>Programming</li>
                            <li>Prototyping</li>
                            <li>Team Work</li>
                            <li>Project Management</li>
                        </ul> 
                        <h3><strong>Languages</strong><hr/></h3>
                        <ul>
                            <li>Tamil</li>
                            <li>English</li>
                        </ul>
                </div>
            </div>
            <div class="sideright">
                <div class="sideright-content">
                    <p>Hard-working second year Artificial intelligence and machine learning pursuing student with a month of consultancy internship experience, Prepared 10+ summary reports, all of which were accepted by the lead engineers. Seeking to leverage proven design skills to help Strike
                        Point continue to provide excellent design solutions.</p>
                    
                        <h3><strong>Work History</strong><hr/></h3>
                        <h5><strong>Intern In Game Development</strong></h5>
                        <p>
                            Monolith Research and Training Labs Pvt Ltd.    
                        </p>
                        <ul>
                            <li>Prepared 10+ summary reports all were accepted by the lead engineers</li>
                            <li>Created 5+ presentation slides for consultants for use during internal and external meetings</li>
                            <li>Prepared 15+ Research presentations which is used for external meetings.</li>
                        </ul>

                        <h3><strong>Education</strong><hr/></h3>
                        <h5><strong>B.tech in Artificial intelligence and Machine Learning</strong></h5>
                        <p>
                            Saveetha Engineering College.   
                        </p>
                        <ul>
                            <li>CGPA: 8.4 (upto third semester)</li>
                        </ul>

                        <h3><strong>Software</strong><hr/></h3>
                        <ul>
                            <li>Fusion 360</li>
                            <li>Unity</li>
                            <li>Tensorflow</li>
                            <li>Unreal</li>
                        </ul>

                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default ProfileComponent;