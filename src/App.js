import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import React, { useReducer } from "react";

const usersEmptyState = [];

const userReducer = (state = usersEmptyState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const existingIds = state.map((user)=>  user.id)
      if(existingIds.includes(action.payload.id)){
        return state
      }
      return [...state, action.payload]
    case "REMOVE_USER":
      return state.filter(user => user.id !== action.payload.id)
       
    default:
      return state;
  }
};
export const UserContext = React.createContext();

function App() {
  const [usersEmpty, userDispatch] = useReducer(userReducer, usersEmptyState);
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{
            userState: usersEmpty,
            userDispatch: userDispatch,
          }}
        >
          <div>
            {" "}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/selectedusers" element={<Cart />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
