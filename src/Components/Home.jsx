import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Users from "./Users";

function Home(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  
  return (
    <div>
      <Navbar />
      <Users users={users} isSelectedUsersList={false}/>
    </div>
  );
}
export default Home;
