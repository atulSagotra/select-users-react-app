import React, { useContext } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import { UserContext } from "../App";

export default function Cart() {
  const userContext = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <Users
        users={userContext.userState}
        isSelectedUsersList={true}
        usersDispatch={userContext.dispatch}
      />
    </div>
  );
}
