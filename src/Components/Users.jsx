import React,{useContext} from "react";

import { UserContext } from "../App";


export default function Users(props) {
    const userContext = useContext(UserContext);
  return (
    <>
      {props.users &&
        props.users.map((user) => (
          <div className="card">
            <div className="card-header left">
              <h2>{user.username}</h2>
            </div>
            <div className="card-body">
              <h5 className="card-title left">Name: {user.name}</h5>
              <h6 className="card-title left">Email: {user.email}</h6>

              <h6 className="card-title left">Phone: {user.phone}</h6>

              <p className="card-text left">
                Address: {user.address.street} {user.address.suite}{" "}
                {user.address.city}
              </p>
              {!props.isSelectedUsersList ? 
              <button className="btn btn-primary action-button"  onClick={()=>userContext.userDispatch({type:"ADD_USER",payload:user})}>
                Add User To List
              </button>
              :
              <button className="btn btn-danger action-button" onClick={()=>userContext.userDispatch({type:"REMOVE_USER",payload:user})}>
                Remove User from List
              </button>}
            </div>
          </div>
        ))}
    </>
  );
}
