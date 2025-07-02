import React from "react";

function Button({bgc}){
    return(
      <button style={{backgroundColor: bgc ,color: "white", fontSize:"30px"}} 
      onClick={() =>{
        alert(`${bgc} is cliked`)
      }}
      
      >Just Color</button>

    )


}

export default Button;