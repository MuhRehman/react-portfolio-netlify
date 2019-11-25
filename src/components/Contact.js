import React, { Component } from 'react'
import "./Contact.css";
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
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

                  <div className="col-lg-12">
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className="heading text-center pt-5">
                <h1>Contact Rehman</h1>
                <h5 >Get in touch with me</h5>
                </div>
                <div className="row mt-5">
                <div className="col-md-4">
                <div className="phone-1 text-center box box">
                    <i class="fa fa-phone"></i>
                </div>
                      <div className="card-text mt-5 text-center">
                      <p>Phone no</p>

                      <h2>+923035353488</h2>
                      </div>
                </div>
                <div className="col-md-4">
                <div className="phone-1 text-center">
                <i class="fa fa-envelope"></i>
                    </div>
                    <div className="card-text mt-5 text-center">
                    <p>Email</p>
                      <h2>abdulrehman1@aol.com</h2>
                      </div>
                </div>
             
                <div className="col-md-4">
                <div className="phone-1 text-center">
                <i class="fa fa-skype"></i>
                    </div>
                    <div className="card-text mt-5 text-center">
                    <p>Skype</p>

                      <h2>abdulrehman1_6</h2>
                      </div>
                </div>
                    
                </div>
             </Animated>
                  </div>
                 
                  </div>
              </div>
            </div>
        )
    }
}
