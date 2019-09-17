import React from 'react';
import '../components/Body.css';
import logo2 from './img/rehman1.png';
import logogit from './img/github-logo.png';
import logolink from './img/linkedin.png';
import logoinstr from './img/instagram.png';
import {Animated} from "react-animated-css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




//  const  imgstyle = {
//     marginTop: "80px",
    
//  };

 const  textstyle = {
 color:"white",
    fontSize: "42px"
 };
//  const  textstyleh1 = {
 
//     fontSize: "22px"
//  };
const  Body =  () => {
    return (
        <div className="main-home">
             <div className="container">
             <div class="row">
                 
                    <div class="col-lg-6 col-sm-6 col-12">
                    <div className="content-img text-center">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <img  src={logo2} className="personimg"   />
 
                    </Animated>
                  

                    </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12">
                    <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>

                     <div  className="text-content1">
                         <h1 className="text-rehman">I'm Abdul Rehman</h1>
                         <h1 className="fsizeh1" >I'm a <span style={ textstyle} >Front-end</span>  Web Developer.</h1>
                           <div className="row ml-5">
                       <a href="https://github.com/Rehman-coding"> <img src={logogit} className=" margin-1" width="60" height="50"/></a>
                       <a href="https://www.linkedin.com/in/abdul-rehman-8611505b/"> <img src={logolink} className=" margin-1" width="60" height="50"/></a>
                       <a href="https://www.instagram.com/rehman_coding/"> <img src={logoinstr}className=" margin-1" width="60" height="50"/></a>
                          
                         
                          

                           </div>
                     </div>
                     </Animated>
                    </div>
                </div>
             </div>
             <div className="footer text-center mt-5 pt-5 bolder">
             ©Rehman_coding2019
             </div>
        </div>
   
    )
}

export default Body;