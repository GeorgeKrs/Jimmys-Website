import "./Prices.css";

import SectionTitle from "../General/SectionTitle";
import Card from "../General/Card";

const Prices = () => {
  return (
    <div className="prices-div p-5">
      <div className="container mt-5 mb-5">
        <SectionTitle title="Πακέτα Συνδρομών" />
        <div className="d-flex flex-wrap justify-content-center mt-5 mb-5">
          <Card
            plan={"Μηνιαία Συνδρομή"}
            registration={"10€"}
            price={"20€"}
            installments={"-"}
            finalPrice={"30€"}
          />
          <Card
            plan={"Τρίμηνη Συνδρομή"}
            registration={"5€"}
            price={"60€"}
            installments={"-"}
            finalPrice={"65€"}
          />
          <Card
            plan={"Εξάμηνη Συνδρομή"}
            registration={"Δωρεάν"}
            price={"100€"}
            installments={"Μέχρι 2"}
            finalPrice={"100€"}
          />
          <Card
            plan={"Ετήσια Συνδρομή"}
            registration={"Δωρεάν"}
            price={"170€"}
            installments={"Μέχρι 2"}
            finalPrice={"170€"}
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
