import React from 'react';
import logo13 from './img/rehman.png';
import template1 from './img/template1.png';
import template2 from './img/template2.png';
import template3 from './img/template3.png';
// import template4 from './img/tempale4';
import {Animated} from "react-animated-css";
import './About.css';

const  headingstyle = {
            color:"white",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
        }
const  hiddenstyle = {
    visibility: "hidden",

}
const  astyle = {
    color:"white",
       fontSize: "18px",
       fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    };

const About = () => {
    return (<div className="aboutstyle">
               <div className="container pt-2 pb-5">
               <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                     <div className="text-center mb-4">
                                <h1>My Recent Work </h1>
                               
            <h5 style={headingstyle}>Here are a few recent developed projects. Want to see live demo visit website.</h5>
                     </div>
                   <div className="row">
                  
                       <div className="col-lg-4">
                       <div className="porfolio1 text-center porfolio-animate">
                             <a href="" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a href="https://abdulrehman500.github.io/top-main-dentist/" style={astyle} >Visit Website</a>
                            </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                       <div className="porfolio2 text-center porfolio-animate2">
                       <a href="" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a href="http://royaltco.com/royal/freelancer-master/" style={astyle} >Visit Website</a>
                            </div>
                           
                           </div>
                       </div>
                       <div className="col-lg-4">
                       <div className="porfolio3 text-center porfolio-animate3">
                       <a href="" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a href="http://royaltco.com/royal/ssl.checker1-master/" style={astyle} >Visit Website</a>
                            </div>
                            
                           </div>
                       </div>
                     
                      
                   </div>
                   </Animated>
                   <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

                  
                   <div className="row mt-5">
                  
                       <div className="col-lg-4">
                       <div className="porfolio4 text-center porfolio-animate4">
                       <a href="" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a href="http://royaltco.com/royal/construction/" style={astyle} >Visit Website</a>
                            </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                       <div className="porfolio5 text-center porfolio-animate5">
                       <a href="#" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a href="http://royaltco.com/royal/top-dentist-white-master/" style={astyle} >Visit Website</a>
                            </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                       <div className="porfolio6 text-center porfolio-animate6">
                       <a href="" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a href="http://royaltco.com/royal/Eventer%20Landing%20Page/" style={astyle} >Visit Website</a>
                            </div>
                           </div>
                       </div>
                     
                      
                   </div>
                   </Animated>
               </div>
    </div>);
};
export default About;
