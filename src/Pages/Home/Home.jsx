import Navbar from "../../components/NavBar/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service"

import "../Home/Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service/>
    </div>
  );
};

export default Home;
