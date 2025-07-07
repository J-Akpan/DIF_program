import React from "react";
import "../styles/index.scss"

function Button({bgc}){
    return(
      <button style={{backgroundColor: bgc ,color: "white"}} 
      onClick={() =>{
        alert(`${bgc} is cliked`)
      }}
      
      >Just Color</button>

    )


}

export default Button;