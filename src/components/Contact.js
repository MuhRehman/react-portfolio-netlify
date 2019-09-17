import React, { Component } from 'react'
import "./Contact.css";
import instra from './img/instagram.png';
import git from './img/github-logo.png';
import link from './img/linkedin.png';
import {Animated} from "react-animated-css";
export default class Contact extends Component {
    render() {
        return (
            <div className="contact-main">
              <div className="container ">
              <div className="row">
                  <div className="col-lg-6">
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                  <div className="contact-text text-center">
              <h1>Just Say Hello</h1>
              <h5>Feel free to contact me</h5>
              <p>
              i am always open to discussing new projects.
              </p>
             <label htmlFor=""></label> <h3 className="email2">abdulrehman1@aol.com</h3>
             <label htmlFor=""></label> <h3>+923035353488</h3>
             <div className="row  mar-1">
                 <img className="mr-4" src={instra} alt="" width="50" height="50" />
                 <img className="mr-4" src={git} alt="" width="50" height="50" />
                 <img className="mr-4" src={link} alt="" width="50" height="50" />
                
             </div>
             </div>
             </Animated>
                  </div>
                  <div className="col-lg-6 text-center">
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                               <div className="input-section">
                                     <div>   <label htmlFor="">Name</label>   <input type="text" name="" id=""/></div>
                                     <div> <label htmlFor="">Email</label>  <input  type="text" name="" id=""/></div>
                                     <div> <label htmlFor=""></label> <textarea>Your Massage...</textarea></div>
                                           <button className="btn bg-dark text-white mt-3 pl-4 pr-4 ">Send</button>
                               </div>
                               </Animated>
                    
                  </div>
                  </div>
              </div>
            </div>
        )
    }
}
