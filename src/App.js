
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./img/iris-appBackground.png"; 

function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email boş Olamaz!!");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Yalnızca Harf giriniz ve uzunluk minimum 8 Karakter ve Maksimum 22 Karakter olmalıdır"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
   <div style={{ backgroundImage:`url(${image})` }}>
    <div  className="App" >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
            <div> <label></label></div>
              <div  className="form-group" >
                <label></label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <label></label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  textAlign='center'
                />
                <label className="form-check-label">Beni Hatırla</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Giriş
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
}
export default App;
