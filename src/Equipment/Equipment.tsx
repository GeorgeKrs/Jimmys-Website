import "./Equipment.css";

import SectionTitle from "../General/SectionTitle";

import equipment1 from "../assets/equipment 1.jpg";
import equipment2 from "../assets/equipment 2.jpg";
import equipment3 from "../assets/equipment 3.jpg";

const Equipment = () => {
  return (
    <div className="equipment-div p-5">
      <div className="container mt-5 mb-5">
        <SectionTitle
          title={"Εξοπλισμός"}
          quote={
            "Στο γυμναστήριό μας θα συναντήσετε συμβατικά όργανα τελευταίας τεχνολογίας Technogym (Σειρά SELECTION). Όργανα αερόβιας αλλά και μυικής ενδυνάμωσης είναι στη διάθεσή σας μαζί με ηλεκτρονικά όργανα 3ης γενιάς. Τέλος, στη διάθεσή σας θα βρείτε πληθώρα αλτηρών και ελεύθερων βαρών."
          }
          lightMode={true}
        />
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
            <img className="img-thumbnail" src={equipment1} alt="Equipment_1" />
            <img
              className="img-thumbnail mt-3"
              src={equipment2}
              alt="Equipment_2"
            />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 my-auto">
            <img className="img-thumbnail" src={equipment3} alt="Equipment_3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
