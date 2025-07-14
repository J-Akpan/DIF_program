import React from "react";
import zee1 from "../assets/photos/zee1.png"
import zee2 from "../assets/photos/zee2.png"
import zeee3 from "../assets/photos/zeee3.png"
import zee4 from "../assets/photos/zee4.png"

export default function Service(){
    return (
        <div className="des">

            <div className="f1" >
                <img src={zee1} alt="" />
                <p><span>Members Discount</span> <br /> 
                Back guarantee under 7 days</p>
            </div>

            <div className="f2">
                <img src={zee2} alt="" />
                 <p><span>Money Return</span> <br /> 
                Support online 24hours a day</p>
            </div>

            <div className="f3">
                <img src={zeee3} alt="" />
                 <p><span>Free Shipping</span> <br /> 
                Free Shipping on all orders</p>
            </div>

            <div className="f4">
                <img src={zee4} alt="" />
                <p><span>Online Support</span> <br /> 
                Online support 24/7</p>
            </div>
        </div>
    )

}