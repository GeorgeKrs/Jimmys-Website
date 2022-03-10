import { useState } from "react";

import "./NavigationBar.css";
import logo from "../assets/logo.png";
// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faBars,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";

// bootstrap
import { Modal } from "react-bootstrap";

interface Props {
  handleView: (ref: string) => void;
}

const NavigationBar = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  const menuHandler = () => {
    handleShow();
  };

  return (
    <div className="pt-4 px-3 d-flex justify-content-between">
      <div className="mt-3">
        <a
          className="header-link text-color"
          onClick={() => window.location.reload()}
        >
          <img style={{ maxHeight: "100px", maxWidth: "100px" }} src={logo} />
        </a>
      </div>
      {/* MENU NAVIGATION */}
      <div className="mt-4">
        <FontAwesomeIcon
          size="2x"
          icon={showMenu === true ? faSlash : faBars}
          className="font-icon-header"
          onClick={menuHandler}
        />
      </div>
      <Modal show={showMenu} onHide={handleClose} className="modal">
        <Modal.Body className="modal-body">
          <div className="d-flex-column align-items-center">
            <div className="p-3">
              <h4
                className="modal-text"
                onClick={() => {
                  props.handleView("aboutUs");
                  handleClose();
                }}
              >
                Σχετικά με εμάς
              </h4>{" "}
            </div>
            <div className="p-3">
              <h4
                className="modal-text"
                onClick={() => {
                  props.handleView("equipment");
                  handleClose();
                }}
              >
                Εξοπλισμός
              </h4>
            </div>
            <div className="p-3">
              <h4
                className="modal-text"
                onClick={() => {
                  props.handleView("prices");
                  handleClose();
                }}
              >
                Συνδρομές
              </h4>
            </div>
            <div className="p-3">
              <h4
                className="modal-text"
                onClick={() => {
                  props.handleView("tournaments");
                  handleClose();
                }}
              >
                Διακρίσεις
              </h4>
            </div>

            <div className="p-3">
              <h4
                className="modal-text"
                onClick={() => {
                  props.handleView("contact");
                  handleClose();
                }}
              >
                Επικοινωνία
              </h4>
            </div>

            <hr />
            <div className="px-3 mt-3 d-flex flex-row-reverse">
              <FontAwesomeIcon
                size="2x"
                icon={faArrowAltCircleLeft}
                className="font-icon-back"
                onClick={handleClose}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavigationBar;
