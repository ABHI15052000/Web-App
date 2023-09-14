import React, { useState, useEffect } from "react";
import "./users.scss";
import TextInput from "../../components/textInput/TextInput";
import Button from "../../components/button/Button";
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
        <h1>Users</h1>
        <button className="addBtn" onClick={openModal}>
          Add Driver +
        </button>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Add New Driver</h2>
              <form>
                <div className="form-group">
                  <label style={{ marginBottom: "15px" }}>Name:</label>
                  <TextInput type="text" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <TextInput type="tel" placeholder="Enter Phone Number" />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <TextInput type="email" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <label>Address:</label>
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
