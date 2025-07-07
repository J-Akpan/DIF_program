import React from "react";
import "./styles/index.scss";
import Button from "./component/Button";
import Menu from "./component/Menu";
import Logo from "./component/Logo";
import Login from "./component/Login";
import MidLeft from "./component/MidLeft";
import MidRight from "./component/MidRight";

const App = () => {
  return (
    <div className="container">
      <section className="header">
        <Logo /> 
        <Menu /> 
        <Login />
      </section>

      <section className="mid-area">
        <MidLeft/>
        <MidRight/>
        
      </section>
    </div>

    // <div>
    //   <h1>Welcome to Woo Job</h1>
    //   <Button bgc={"red"} />
    //   <Button  bgc={"cyan"} />
    //   <Button bgc={"yellow"} />
    //   <Button bgc={"black"} />
    // </div>
  );
};

export default App;
