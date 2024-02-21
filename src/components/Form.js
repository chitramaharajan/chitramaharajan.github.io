import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegistrationLogo from "./img1.jpg";
import MyButton from "./Button";

function RegistrationForm() {
  const navigate = useNavigate();
  const [defaultUsername, setDefaultUsername] = useState("");
  const [defaultPassword, setDefaultPassword] = useState(null);
  const [defaultMobilNumber, setDefaultMobilNumber] = useState("");

  useEffect(() => {
    defaultPassword !== null
      ? setDefaultUsername("React World!!")
      : console.log("abc");
  }, []);

  const dispatch = useDispatch();

  function RegisterSucess() {
    dispatch({
      type: "Register",
      payload: { username: defaultUsername, password: defaultPassword },
    });
    navigate("/login");
  }

  // function RegistrationForm(){
  return (
    <>
      <div className="register">
        <div className="col-1">
          <h2>Sign in</h2>
          <span>Register and enjoy the service</span>

          <form className="flex flex-col">
            <lable>Username</lable>
            <input
              required={true}
              type="text"
              value={defaultUsername}
              onChange={(e) => {
                setDefaultUsername(e.target.value);
              }}
              placeholder="enter your username"
            />

            <lable>Password</lable>
            <input
              type="password"
              value={defaultPassword}
              onChange={(e) => {
                setDefaultPassword(e.target.value);
              }}
              placeholder="enter your password"
            />

            <input type="password" placeholder="confirm password" />

            <lable>Mobile number</lable>
            <input
              type="number"
              min="1"
              max="10"
              value={defaultMobilNumber}
              onChange={(e) => {
                setDefaultMobilNumber(e.target.value);
              }}
              placeholder="mobile number"
            />

            <button className="btn" onClick={() => RegisterSucess()}>
              Register
            </button>

            <button className="btn" onClick={() => navigate("/")}>
              GoBack
            </button>
            
          </form>
        </div>
      </div>

      <div className="col-2">
        <img src={RegistrationLogo} alt="" />
      </div>
    </>
  );
}

export default RegistrationForm;
