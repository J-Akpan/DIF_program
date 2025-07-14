import React from "react";
import "../styles/banner.scss"



export default function Banner(){
    return(
        <div className="banner">
            <div className="banner-content">
                <p className="healthy">Lets eat Healthy</p>
                <p className="respect">Respect Nature</p>
                <p className="gain">Gain Benefit</p>
                <button className="contact">Contact Us</button>
            </div>
        </div>
    )
}