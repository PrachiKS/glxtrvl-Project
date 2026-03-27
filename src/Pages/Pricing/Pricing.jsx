import React from 'react'
import Navbar from "../../components/NavBar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "./Component/Card";

import "./PricingStyles.css"

const Pricing = () => {
    return(
      <>
        <Navbar/>
        <Header heading="Pricing Page"/>
        <Card/>
        <Footer/>
      </>
    )
}

export default Pricing