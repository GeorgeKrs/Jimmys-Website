import "./App.css";

import IntroPage from "./IntroPage/IntroPage";
import AboutUs from "./About_us/AboutUs";
import Equipment from "./Equipment/Equipment";
import Prices from "./Prices/Prices";
import Tournaments from "./Tournaments/Tournaments";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="">
      <IntroPage />
      <AboutUs />
      <Equipment />
      <Prices />
      <Tournaments />
      <Footer />
    </div>
  );
}

export default App;
