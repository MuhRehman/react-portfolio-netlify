import React from 'react';
import logo13 from './img/rehman.png';
import template1 from './img/template1.png';
import template2 from './img/template2.png';
import template3 from './img/template3.png';
// import template4 from './img/tempale4';
import {Animated} from "react-animated-css";
import './About.css';
const About = () => {
    return (<div className="aboutstyle">
               <div className="container pt-5 pb-5">
               <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

                   <div className="row">
                       <div className="col-lg-4">
                           <img  className="projectimg" src={template1}  width="250" height="250" alt=""/>
                       </div>
                       <div className="col-lg-4">
                       <img className="projectimg" src={template2}  width="250" height="250" alt=""/>
                       </div>
                       <div className="col-lg-4">
                       <img className="projectimg" src={template3} width="250" height="250" alt=""/>
                       </div>
                      
                   </div>
                   </Animated>
                   <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

                   <div className="row mt-5">

                       <div className="col-lg-4">
                           <img className="projectimg" src={template1} width="250" height="250" alt=""/>
                       </div>
                       <div className="col-lg-4">
                       <img  className="projectimg" src={template2}  width="250" height="250" alt=""/>
                       </div>
                       <div className="col-lg-4">
                       <img className="projectimg" src={template3} width="250" height="250" alt=""/>
                       </div>
                      
                   </div>
                   </Animated>
               </div>
    </div>);
};
export default About;
