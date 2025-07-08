import React from "react";
import "./styles/index.scss";
import Button from "./component/Button";
import Menu from "./component/Menu";
import Logo from "./component/Logo";
import Login from "./component/Login";
import MidLeft from "./component/MidLeft";
import MidRight from "./component/MidRight";
import Recommendation from "./component/Recommendation"
import Footer from "./component/Footer";
import Last  from "./component/Lasts"

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

      <section className="recom">
        <Recommendation />
      </section>

      <section className="foot"> 
        <Footer />
      </section>

       <section className="foot"> 
        <Last />
      </section>
      
      <div className="copyright">
        <p>© Copyright Get-A-Job RMS 2019, All right reserved</p>
      </div>

     


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
