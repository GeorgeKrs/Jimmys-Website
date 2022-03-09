import { useState } from "react";

import "./Form.css";

import useInput from "../hooks/use-input";

// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const isNotEmpty = (value: string) => value !== "";
const isEmail = (value: string) => value.includes("@");

const Form = () => {
  const [inputsDisabled, setInputsDisabled] = useState(false);

  const {
    value: fullnameValue,
    isValid: fullnameIsValid,
    hasError: fullnameHasError,
    valueChangeHandler: fullnameChangeHandler,
    inputBlurHandler: fullnameBlurHandler,
    reset: resetFullname,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: textValue,
    isValid: textIsValid,
    hasError: textHasError,
    valueChangeHandler: textChangeHandler,
    inputBlurHandler: textBlurHandler,
    reset: resetText,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid && fullnameIsValid && textIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");

    setInputsDisabled(true);
    // resetFullname();
    // resetEmail();
    // resetText();
  };

  return (
    <form className="form-div">
      <div className="">
        <div className="">
          <label className="form-label">
            <b>Ονοματεπώνυμο:</b>
          </label>
          <input
            className="custom-input"
            type="text"
            id="name"
            value={fullnameValue}
            disabled={inputsDisabled}
            onChange={fullnameChangeHandler}
            onBlur={fullnameBlurHandler}
          />
          {fullnameHasError === true ? (
            <p className="error-text">Το πεδίο δεν μπορεί να είναι άδειο.</p>
          ) : null}
          <label className="mt-4 form-label">
            <b>Email:</b>
          </label>
          <input
            className="custom-input"
            type="text"
            id="email"
            value={emailValue}
            disabled={inputsDisabled}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError === true ? (
            <p className="error-text">Το email πρέπει να είναι έγκυρο.</p>
          ) : null}

          <label className="mt-4 form-label">
            <b>Μήνυμα:</b>
          </label>

          <textarea
            className="custom-input"
            id="textMsg"
            rows={3}
            value={textValue}
            disabled={inputsDisabled}
            onChange={textChangeHandler}
            onBlur={textBlurHandler}
          />
          {textHasError === true ? (
            <p className="error-text">Το πεδίο δεν μπορεί να είναι άδειο.</p>
          ) : null}
        </div>
      </div>
      <div className="mt-5">
        <p>
          <FontAwesomeIcon
            size="lg"
            icon={faInfoCircle}
            className="font-icon-back"
          />{" "}
          Όλα τα παραπάνω πεδία είναι υποχρεωτικά.
        </p>
        <button
          className={
            formIsValid === true
              ? inputsDisabled === true
                ? "btn btn-dark"
                : "custom-btn"
              : "btn btn-dark"
          }
          disabled={
            formIsValid === true
              ? inputsDisabled === true
                ? true
                : false
              : true
          }
          onClick={submitHandler}
        >
          Αποστολή
        </button>
      </div>
    </form>
  );
};

export default Form;
