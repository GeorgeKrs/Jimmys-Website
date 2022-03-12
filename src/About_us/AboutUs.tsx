import { Carousel } from "react-bootstrap";

import "./AboutUs.css";
import jimmysposing_beach from "../assets/jimmysposing_beach.jpg";
import jimCompetition from "../assets/jimCompetition.jpg";
import SectionTitle from "../General/SectionTitle";

interface Props {
  viewRef: any;
}

const AboutUs = (props: Props) => {
  return (
    <div ref={props.viewRef} className="infromationDiv p-5">
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-sm-12 col-md-12 col-lg-6 mb-5">
            <SectionTitle
              title={"Σχετικά με εμάς"}
              quote={
                "Έχοντας 40 χρόνια εμπειρίας με το άθλημα του Fitness & Bodybuilding, σαν αθλητής και δάσκαλος έχω αποκομίσει τεράστια οφέλη από αυτή την ενασχόλησή μου. Θέλω όλες τις γνώσεις και εμπειρίες μου να σας τις μεταφέρω και να τις μοιραστώ μαζί σας, στους αθλούμενους του γυμναστηρίου, αλλά και όλους εσάς που θέλετε να με επισκευτείτε για να συμβουλευτείτε ποιο είναι το ιδανικότερο πρόγραμμα για εσάς. Το πρόγραμμα θα είναι σχεδιασμένο να σας ταιριάζει σε ατομικό επίπεδο με όλες τις τεχνικές λεπτομέρειες που θα σας βοηθήσουν να φτάσετε στον στόχο σας."
              }
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Carousel>
              <Carousel.Item>
                <img
                  className="img-thumbnail"
                  src={jimmysposing_beach}
                  alt="Jimmy's Posing"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-thumbnail"
                  src={jimCompetition}
                  alt="Jimmy's Posing"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
