import { useEffect } from "react";
import "./App.css";
import ExperienceSection from "./Components/ExperienceSection";
import PortfolioFooter from "./Components/Footer";
import MyPortfolio from "./Components/MyPortfolio";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Home/Homepage";
import { keepTheme } from "./utils/darkModeSwitch";

function App() {
  useEffect(() => {
    keepTheme();
  }, []);

  return (
    <>
      <Navbar />
      <Homepage />
      <MyPortfolio />
      <ExperienceSection />
      <PortfolioFooter />
    </>
  );
}

export default App;
