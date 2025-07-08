import React from "react";
import "../styles/partners.scss"
import paystack from "../photos/paystack.svg"
import google from "../photos/google.svg"
import kpmg from "../photos/kpmg.svg"

export default function Partners() {
    return (
        <div className="partners">
            <p>Trusted by:</p>
            <img  src={paystack} alt="" />
            <img className="google" src={google} alt="" />
            <img className="kmpg" src={kpmg} alt="" />
            

        </div>
    )


}