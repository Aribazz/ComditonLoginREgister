import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
//NOTE: here we make sure that we have the conditon to work on either the Login or registered order meaning if isRegister is false(never registered) we have Registerd form while if
// he has Registered we have the Login form in the App component all fraction out.
