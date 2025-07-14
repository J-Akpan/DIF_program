import React from "react";
import "../styles/nav.scss"
import logo from "../assets/photos/logo.png" 
import call from "../assets/photos/caller.png"

export default function Nav(){
    return(
        <div className="nav">

            <img className="logo" src={logo} alt="" />

            <div className="menu">
                <div>Home</div>
                <div>Page</div>
                <div>Services</div>
                <div>Portfolio</div>
                <div>Blog</div>
                <div>contact Us</div>
            </div>


            <div className="call">
                <img className="call-icon" src={call} alt="" />
                <p className="call-text">Call Us Now <br /> +234-8169-625-557</p>
            </div>

            <button className="top-button">Get in Touch</button>




        </div>
    )

}