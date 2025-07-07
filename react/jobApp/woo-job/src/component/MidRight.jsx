import React from "react";
import "../styles/midright.scss"
import hero from '../photos/hero.png'

export default function MidRight(){
    return (
        <div className="midright">
          <img className="hero" src= {hero} alt="" />
        </div>
    )
}