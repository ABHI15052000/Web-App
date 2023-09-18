import React, { useState, useEffect } from "react";
import "./users.scss";
import TextInput from "../../components/textInput/TextInput";
import Button from "../../components/button/Button";
import texts from "../../texts";
const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen && e.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <div className="users">
      <div className="addUserContainer">
        <h1>{texts.users.heading}</h1>
        <button className="addBtn" onClick={openModal}>
          {texts.users.btn}
        </button>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{texts.addDriverModal.heading}</h2>
              <form>
                <div className="form-group">
                  <label style={{ marginBottom: "15px" }}>{texts.name}</label>
                  <TextInput type="text" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                  <label>{texts.phnNumber}</label>
                  <TextInput type="tel" placeholder="Enter Phone Number" />
                </div>
                <div className="form-group">
                  <label>{texts.email}</label>
                  <TextInput type="email" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <label>{texts.address}</label>
                  <TextInput type="text" placeholder="Enter Address" />
                </div>
              </form>
              <Button text={"Add Driver"} onClick={closeModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
