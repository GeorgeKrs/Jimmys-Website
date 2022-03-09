import "./IntroQuote.css";

// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const IntroQuote = () => {
  return (
    <div className="intro-quote-div">
      <h1 className="text-color">
        <b>Jimmy's Fitness Building Club</b>
      </h1>
      <div className="mt-5">
        <ul className="text-color ul-style">
          <li className="il-spacing">
            <FontAwesomeIcon
              size="lg"
              icon={faCheck}
              className="font-icon-header"
            />
            <span className="px-2">33 Χρόνια εμπειρίας</span>
          </li>
          <li className="il-spacing">
            <FontAwesomeIcon
              size="lg"
              icon={faCheck}
              className="font-icon-header"
            />
            <span className="px-2">
              Κορυφαίος εξοπλισμός εκγύμνασης <b>Technogym</b>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntroQuote;
