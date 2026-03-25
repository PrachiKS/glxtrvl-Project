import Navbar from "../../components/NavBar/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service";
import CallToAction from "./Components/CallToAction";
import Faq from "./Components/Faq";
import Footer from "../../components/Footer/Footer";

import "../Home/Home.css";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <CallToAction/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Home;
