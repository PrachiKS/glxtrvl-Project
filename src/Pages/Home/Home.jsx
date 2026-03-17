import Navbar from "../../components/NavBar/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";


import "../Home/Home.css";
import Service from "./Components/Service";
import CallToAction from "./Components/CallToAction";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <CallToAction/>
    </div>
  );
};

export default Home;
