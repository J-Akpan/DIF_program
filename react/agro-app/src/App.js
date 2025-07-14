import React from "react";
import "./styles/index.scss"
import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Service from "./components/Service"
import Product from "./components/Product";

import "./styles/service.scss"

export default function App(){
  return(
    <div className="container">
      
      <section className="heading">
        <Nav />
      </section>

      <section className="desc">
        <Banner />
      </section>

      
      <section className="des-area"> 
        <Service /> 
      </section>

      
      <section className="green-area">
        <Product />
      </section>
      <section className="white-area">sdfgsfgfg</section>
      <section className="feedbacks">sdfgsfgfg</section>
      <section className="footers">sdfgsfgfg</section>

    </div>
  ) 
}