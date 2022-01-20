import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function LogIn() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  let history = useHistory();

  const [nameError, setNameError] = useState(null);

  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // prevents refresh in all browsers
    if (input.username && input.password) {
      history.push("/home");
    } else {
      setMessage("Please Log In First");
    }
  }

  function handleChange(e) {
    // Use spread operator to clone previous state, but replace with new values
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="form-container">
      {message ? (
        message
      ) : (
        <form id="form-id" onSubmit={handleSubmit}>
          <h1 id="heading">Log In</h1>
          <div className="paymentContainer">
            <div className="payment-center">
              <div>
                <label for="username">User Name: </label>
                <input
                  className="box"
                  type="text"
                  name="username"
                  value={input.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
              </div>{" "}
              <br />
              <div>
                <label for="password">Password: </label>
                <input
                  className="box"
                  type="text"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>{" "}
              <br />
              <div>
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
