import "./App.css";
import ExperienceSection from "./Components/ExperienceSection";
import PortfolioFooter from "./Components/Footer";
import MyPortfolio from "./Components/MyPortfolio";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import Homepage from "./Pages/Home/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <Homepage/>
      <MyPortfolio/>
      <ExperienceSection/>
      <Testimonials/>
      {/* <section className="h-screen" id="testimonial">Testimonial</section> */}
      {/* <section className="h-screen" id="about">About</section> */}
      {/* <section className="h-screen" id="portfolio">Contact</section> */}
      <PortfolioFooter/>
    </>
  );
}

export default App;
