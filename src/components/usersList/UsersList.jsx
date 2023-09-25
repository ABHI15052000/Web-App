import React from "react";
import "./usersList.scss";
import { topDealUsers } from "../../data";
import { BsThreeDotsVertical } from "react-icons/bs";

const UsersList = () => {
  return (
    <div className="usersList">
      <div className="heading">
        <span className="heading-text">Top Users List</span>
        <BsThreeDotsVertical />
      </div>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userText">
                <span className="userName">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
