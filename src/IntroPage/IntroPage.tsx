import "./IntroPage.css";

import NavigationBar from "../navigation/NavigationBar";
import IntroQuote from "./IntroQuote";

const IntroPage = () => {
  return (
    <div className="backgroundDiv">
      <div className="container">
        <NavigationBar />
        <IntroQuote />
      </div>
    </div>
  );
};

export default IntroPage;
