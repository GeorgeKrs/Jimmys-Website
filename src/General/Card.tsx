import "./Card.css";

interface Props {
  plan: string;
  price: string;
  registration: string;
  installments: string;
  finalPrice: string;
}

const Card = (props: Props) => {
  return (
    <div className="card text-dark bold-letters mb-3 mx-3">
      <div className="card-header text-center">{props.plan}</div>
      <div className="card-body">
        <ul className="list-group ">
          <li className="list-group-item">
            Εγγραφή:
            <span className="px-1">{props.registration}</span>
          </li>

          <li className="list-group-item">
            Τιμή:<span className="px-1">{props.price}</span>
          </li>
          <li className="list-group-item">
            Δόσεις:<span className="px-1">{props.installments}</span>
          </li>
          <hr />
          <li className="list-group-item">
            Τελική Τιμή:<span className="px-1">{props.finalPrice}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
