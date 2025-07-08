import React from "react";
import "../styles/recommendation.scss"
import paystack from "../photos/paystackreal.png"
import flutter from "../photos/flutter.png"
import google from "../photos/googlereal.png"
import access from "../photos/access.png"

export default function Recommendation(){
    return(
        <div className="job-holder">
            <p className="recommend">Recommended Jobs</p>

            <section className="job">
                <div className="j1">
                    <button>fulltime</button> <br />
                    <img src= {paystack} alt="" />
                    <p>QA Engineer</p>
                    <p className="apply">
                        Paystack <br /> <span>Lagos, Nigeria </span>
                    <button>Apply now!</button>
                    </p>

                </div>

                <div className="j1">
                    <button>fulltime</button> <br />
                    <img className="goo" src= {google} alt="" />
                    <p>Product Analyst</p>

                        <p className="apply">
                        Paystack <br /> <span>Lagos, Nigeria </span>
                    <button>Apply now!</button>
                    </p>
                </div>

                <div className="j1">
                    <button>fulltime</button> <br />
                    <img src= {flutter} alt="" />
                    <p>HR Manager</p>

                    <p className="apply">
                        Paystack <br /> <span>Lagos, Nigeria </span>
                    <button>Apply now!</button>
                    </p>

                </div>
                
                <div className="j1">
                    <button>fulltime</button> <br />
                    <img src= {access} alt="" />
                    <p>QA Engineer</p>

                    <p className="apply">
                        Paystack <br /> <span>Lagos, Nigeria </span>
                    <button>Apply now!</button>
                    </p>

                </div>


            </section>


        </div>
        
    )

}