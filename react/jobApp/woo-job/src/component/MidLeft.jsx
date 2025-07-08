import React from "react";
import "../styles/midleft.scss"
import Search from "./Search";
import Partners from "./Partners";

export default function MidLeft(){
    return (
        <div className="left">
            <p className="first-text">Find a <span>job</span> easily</p>
            <p className="second-text">With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>
            <Search />
            <Partners />


        </div>
    )
}