import React from "react";
import "../styles/nav.scss"
import logo from "../assets/photos/logo.png" 
import call from "../assets/photos/caller.png"
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div className="nav">

            <img className="logo" src={logo} alt="" />

            <div className="menu">
                <div> <Link to="/">Home</Link> </div>
                <div> <Link to= "/about">About</Link></div>
                <div><Link to= "/about">Services</Link></div>
                <div><Link to= "/about">Portfolio</Link></div>
                <div><Link to= "/about">Blog</Link></div>
                <div><Link to= "/contact">Contact Us</Link></div>
            </div>


            <div className="call">
                <img className="call-icon" src={call} alt="" />
                <p className="call-text">Call Us Now <br /> +234-8169-625-557</p>
            </div>

            <button className="top-button">Get in Touch</button>




        </div>
    )

}