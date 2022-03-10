import { useRef } from "react";

import "./App.css";

import NavigationBar from "./navigation/NavigationBar";
import IntroQuote from "./IntroPage/IntroQuote";
import AboutUs from "./About_us/AboutUs";
import Equipment from "./Equipment/Equipment";
import Prices from "./Prices/Prices";
import Tournaments from "./Tournaments/Tournaments";
import Footer from "./Footer/Footer";

function App() {
  const aboutUsRef = useRef<null | HTMLDivElement>(null);
  const equipmentRef = useRef<null | HTMLDivElement>(null);
  const pricesRef = useRef<null | HTMLDivElement>(null);
  const tournamentsRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const handleView = (ref: string) => {
    switch (ref) {
      case "aboutUs":
        aboutUsRef.current!.scrollIntoView({ behavior: "smooth" });
        break;

      case "equipment":
        equipmentRef.current!.scrollIntoView({ behavior: "smooth" });
        break;

      case "prices":
        pricesRef.current!.scrollIntoView({ behavior: "smooth" });
        break;

      case "tournaments":
        tournamentsRef.current!.scrollIntoView({ behavior: "smooth" });
        break;

      case "contact":
        contactRef.current!.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        break;
    }
  };

  return (
    <div className="">
      <div className="backgroundDiv-intro">
        <div className="container">
          <NavigationBar handleView={handleView} />
          <IntroQuote />
        </div>
      </div>
      <AboutUs viewRef={aboutUsRef} />
      <Equipment viewRef={equipmentRef} />
      <Prices viewRef={pricesRef} />
      <Tournaments viewRef={tournamentsRef} />
      <Footer viewRef={contactRef} />
    </div>
  );
}

export default App;
