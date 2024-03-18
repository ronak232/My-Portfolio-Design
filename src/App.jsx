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
      {/* <Testimonials/> */}
      <PortfolioFooter/>
    </>
  );
}

export default App;
