import Form from "../Form/Form";

const ContactForm = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6">
      <h2 className={"text-light"}>
        <b>Επικοινωνήστε μαζί μας</b>
      </h2>
      <div className="mt-5 mb-5">
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
