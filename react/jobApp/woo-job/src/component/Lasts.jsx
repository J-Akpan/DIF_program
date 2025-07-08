import React from "react";
import "../styles/last.scss"
import logo from "../photos/logo.png"
import Twitter from "../photos/Twitter.png"
import Linkedin from "../photos/LinkedIn.png"
import Instagram from "../photos/Instagram.png"
import Facebook from "../photos/Facebook.png"

export default function Lasts(){
    return (
        <div className="covers">
            <div>
                <img src= {logo} alt="" /> <br />
                <p>Getajobng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site.</p>
            </div>

            <div className="information">
                <p className="info">Information</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Terms & Condition</p>

            </div>
            
           <div className="information">
                <p className="info">Job Seeker</p>
                <p>Create Account</p>
                <p>Job List</p>
                <p>FAQ</p>

            </div>
            
            <div className="information">
                <p className="info">Employers</p>
                <p>Create Account</p>
                <p>Post a Job</p>
                <p>FAQ</p>

            </div>
            
            <div className="information">
                <p className="info">Social Media</p>
                <img src= {Instagram} alt="" />
                <img src= {Twitter} alt="" />
                <img src={Facebook} alt="" />
                <img src={Linkedin} alt="" />

            </div>

            
            
        </div>
        
    )
}