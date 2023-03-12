import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [buttonState, setButtonState] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      (name === "" ||
        !email.match(emailCheck) ||
        password === "" ||
        !isChecked) &&
      buttonState === 0
    ) {
      setButtonState(1);
    } else if (
      (name === "" ||
        !email.match(emailCheck) ||
        password === "" ||
        !isChecked) &&
      buttonState === 1
    ) {
      setButtonState(2);
    } else if (
      (name === "" ||
        !email.match(emailCheck) ||
        password === "" ||
        !isChecked) &&
      buttonState === 2
    ) {
      setButtonState(1);
    } else {
      // Submit form data
    }
  };

  const buttonMoveLeft = () => {
    return { transform: "translateX(-160%)" };
  };

  const buttonMoveRight = () => {
    return { transform: "translateX(0%)" };
  };

  const resetBtn = () => {
    return { transform: "translateX(0%)" };
  };

  const buttonStyle =
    buttonState === 1
      ? buttonMoveLeft()
      : buttonState === 2
      ? buttonMoveRight()
      : resetBtn();

  return (
    <div className="signup-box">
      <form onSubmit={handleSubmit} name="suForm" id="supform">
        <input
          type="text"
          placeholder="Full name"
          id="name"
          value={name}
          onChange={handleNameChange}
          maxLength="30"
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="pass"
          value={password}
          onChange={handlePasswordChange}
          minLength="8"
        />

        <label htmlFor="check" className="label">
          <input
            type="checkbox"
            name="check1"
            id="check"
            checked={isChecked}
            onChange={handleCheckChange}
          />
         I agree to the
        </label>

        <input
          type="submit"
          id="submit-btn"
          value="Sign Up"
          style={buttonStyle}
        />
      </form>
    </div>
  );
}

export default SignUpForm;
