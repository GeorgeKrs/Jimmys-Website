import { useState, useEffect } from "react";

import "./NavigationBar.css";

// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faBars,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";

// bootstrap
import { Modal } from "react-bootstrap";

const NavigationBar = () => {
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
          JIMMY'S FITNESS
          <br />
          BUILDING CLUB
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
              <h4 className="modal-text">Σχετικά με εμάς</h4>
            </div>
            <div className="p-3">
              <h4 className="modal-text">Εξοπλισμός</h4>
            </div>
            <div className="p-3">
              <h4 className="modal-text">Συνδρομές</h4>
            </div>
            <div className="p-3">
              <h4 className="modal-text">Επικοινωνία</h4>
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
