import "./Footer.css";

// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-div p-5">
      <div className="container  mt-5 mb-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h2 className={"text-light"}>
              <b>
                <u>Επικοινωνήστε μαζί μας</u>
              </b>
            </h2>
            <div className="mt-5 text-light"></div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <h2 className={"text-light"}>
              <b>
                <u>Bρείτε μας από κοντά</u>
              </b>
            </h2>
            <div className="mt-5">
              <a
                className="footer-link"
                href="https://www.google.com/maps/place/Sokratous+208,+Acharnes+136+73/@38.0859579,23.7356142,15z/data=!4m15!1m9!3m8!1s0x14a1a1ebee8a28e5:0x44af86ef00c38751!2sSokratous+208,+Acharnes+136+73!3b1!8m2!3d38.0859579!4d23.7443689!14m1!1BCgIgARICCAI!3m4!1s0x14a1a1ebee8a28e5:0x44af86ef00c38751!8m2!3d38.0859579!4d23.7443689"
                target="_blank"
              >
                <FontAwesomeIcon size="2x" icon={faMapPin} />
                <span className="px-1">
                  <h4>Σωκράτους 208,Αχαρναί</h4>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
