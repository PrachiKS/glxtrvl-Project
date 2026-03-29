import React from 'react'
import Navbar from "../../components/NavBar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "./Component/Form";
import "./Component/ContactStyle.css";

const Contact = () => {
    return(
      <>
        <Navbar/>
        <Header heading="Contact Page"/>
        <Form/>
        <Footer/>
      </>
    )
}

export default Contact;