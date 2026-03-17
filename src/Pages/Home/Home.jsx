import Navbar from "../../components/NavBar/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

import "../Home/Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
