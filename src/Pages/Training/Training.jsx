import React from 'react'
import Navbar from "../../components/NavBar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "../Home/Components/About";
const Training = () => {
    return(
      <>
        <Navbar/>
        <Header heading="Training Page"/>
        <About heading="Training"/>
        <Footer/>
      </>
    )
}

export default Training;