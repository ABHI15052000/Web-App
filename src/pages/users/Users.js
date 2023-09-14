import React, { useState, useEffect } from "react";
import "./users.scss";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddDriver = () => {
    closeModal();
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
      <div className="addUserConatainer">
        <h1>Users</h1>
        <button className="addBtn" onClick={openModal}>
          Add Driver +
        </button>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Add New Driver</h2>
              <button onClick={handleAddDriver}>Save</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
