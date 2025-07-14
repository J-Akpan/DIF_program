import React from "react";
import "../styles/product.scss"

import corn from "../assets/photos/corn1.png"
import tomato from "../assets/photos/tomato.png"
import cabbage from "../assets/photos/cabbage.png"
import kiwi from "../assets/photos/kiwi.png"
import cat from "../assets/photos/cat.png"

export default function Product(){
    return (
        <div >
            <p className="product-texts"> <span>Customer Choice</span> <br />Check Our Products</p> <br />
            <div className="product-container">
            
            <div className="s1">
                <img src={corn} alt="" />
                <p>Corn <br /><span>$ 45.00</span></p>
                <img className="cat" src={cat} alt="" />
            </div>

            <div className="s2">
                <img src={tomato} alt="" />
                 <p>Tomato <br /><span>$ 55.00</span></p>
                 <img className="cat" src={cat} alt="" />
            </div>

            <div className="s3">
                <img src={cabbage} alt="" />
                 <p>Cabbage <br /><span>$ 63.00</span></p>
                 <img className="cat" src={cat} alt="" />
            </div>

            <div className="s4">
                <img src={kiwi} alt="" />
                 <p>Kiwi <br /><span>$ 90.00</span></p>
                 <img className="cat" src={cat} alt="" />
            </div>


        
        </div>


        </div>
        
        
    )
}
