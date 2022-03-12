import "./Prices.css";

import SectionTitle from "../General/SectionTitle";
import Card from "../General/Card";

interface Props {
  viewRef: any;
}

const Prices = (props: Props) => {
  return (
    <div ref={props.viewRef} className="prices-div p-5">
      <div className="container mt-5 mb-5">
        <SectionTitle title="Πακέτα Συνδρομών" />
        <div className="d-flex flex-wrap justify-content-center mt-5 mb-5">
          <Card
            plan={"Μηνιαία Συνδρομή"}
            registration={"Δωρεάν"}
            price={"30€"}
            installments={"-"}
            finalPrice={"30€"}
          />
          <Card
            plan={"Τρίμηνη Συνδρομή"}
            registration={"Δωρεάν"}
            price={"60€"}
            installments={"-"}
            finalPrice={"60€"}
          />
          <Card
            plan={"Εξάμηνη Συνδρομή"}
            registration={"Δωρεάν"}
            price={"100€"}
            installments={"-"}
            finalPrice={"100€"}
          />
          <Card
            plan={"Ετήσια Συνδρομή"}
            registration={"Δωρεάν"}
            price={"150€"}
            installments={"-"}
            finalPrice={"150€"}
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
