import React from "react";
import "../styles/search.scss"
import search from "../photos/search.png"
import map from "../photos/map.png"


export default function Search () {
    return (
        <div className="search">
            <input className="textfield" type="text" placeholder="Enter a keyword" />
            <img className="map" src= {map} alt="" />
            <input className="location" placeholder="location"></input>
            <button className="search-icon"><img src= {search} alt="" /></button>


        </div>
    )
}