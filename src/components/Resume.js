import React, { Component } from 'react';
import cv from './img/template22.jpg';
import {Animated} from "react-animated-css";
import "./Resume.css";
// import { Document } from 'react-pdf'.
// import Cv from './img/cv.pdf';
export default class Resume extends Component {
    render() {
        return (
            <div className="resume-main">
              <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
            <div className="container text-center">
          

                <img  className="cvtem" src={cv} alt=""   />
          
            </div>
            </Animated>   
            </div>
        )
    }
}
