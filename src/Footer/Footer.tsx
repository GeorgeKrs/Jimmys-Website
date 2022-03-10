import "./Footer.css";

import ContactForm from "./ContactForm";
import MeetUs from "./MeetUs";
import CreatorsInfo from "./CreatorsInfo";

interface Props {
  viewRef: any;
}

const Footer = (props: Props) => {
  return (
    <div ref={props.viewRef} className="footer-div p-5">
      <div className="container mt-5 mb-5">
        <div className="row">
          <ContactForm />
          <MeetUs />
        </div>
        <hr className="mt-5 bg-light" />
        <CreatorsInfo />
      </div>
    </div>
  );
};

export default Footer;
