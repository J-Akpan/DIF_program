import React from "react";
import "../styles/index.scss"
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import Service from "../components/Service"
import Product from "../components/Product";
import Text from "../components/Text"
import Footer from "../components/Footer"

import "../styles/service.scss"

export default function About(){
  return(
    <div className="container">
      
      <section className="heading">
        <Nav />
      </section>

      {/* <section className="desc">
        <Banner />
      </section> */}

      
      <section className="des-area"> 
        <Service /> 
      </section>

      
      <section className="green-area">
        <Product />
      </section>

      <section className="white-area">
        <Text />
      </section>
      
      {/* <section className="white-area">sdfgsfgfg</section>
      <section className="white-area">sdfgsfgfg</section>
      <section className="feedbacks">sdfgsfgfg</section> */}
      
      <section className="footers">
        <Footer />
      </section>

    </div>
  ) 
}