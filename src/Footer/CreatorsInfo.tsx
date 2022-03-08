// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const CreatorsInfo = () => {
  return (
    <div>
      <div className="mt-3 d-flex justify-content-center">
        <a
          className="creators-link"
          href="https://www.facebook.com/Jimmys-Club-646727145400494"
          target="_blank"
        >
          <FontAwesomeIcon size="2x" icon={faFacebookSquare} />
        </a>
      </div>

      <div className="mt-5 text-secondary d-flex justify-content-end">
        <h6>&copy; 2022, Jimmy'sClub | All Rights Reserved</h6>
      </div>
      <div className="text-secondary d-flex justify-content-end">
        <h6>
          Made by
          <a
            className="creators-link px-1"
            target="_blank"
            href="https://georgekoursoumis.web.app"
          >
            George Koursoumis
          </a>
        </h6>
      </div>
    </div>
  );
};

export default CreatorsInfo;
