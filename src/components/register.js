import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";
import "./register.css";

export default function Register() {
  const navigate = useNavigate();
  const { http, setToken } = AuthUser();
  const [fullName, setfullName] = useState();
  const [userName, setuserName] = useState();
  const [refferalId, setrefferalId] = useState();
  const [email, setEmail] = useState();
  const [country, setCountry] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    // api call
    http
      .post("/register", {
        fullName: fullName,
        userName: userName,
        refferalId: refferalId,
        email: email,
        country: country,
        mobile: mobile,
        password: password,
      })
      .then((res) => {
        navigate("/login");
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
          <div className="card p-4 register-card">
            <h1 className="text-center mb-3">Register </h1>
            <p className="text-center mb-3">Create your company accounts</p>
            <div className="form-group mb-2">
              <input
                type="test"
                className="form-control"
                placeholder="Enter Full name"
                onChange={(e) => setfullName(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="test"
                className="form-control"
                placeholder="Enter User name"
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="test"
                className="form-control"
                placeholder="Enter Refferal ID"
                onChange={(e) => setrefferalId(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="test"
                className="form-control"
                placeholder="Select Country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="test"
                className="form-control"
                placeholder="Enter Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={submitForm}
              className="btn btn-warning mt-4"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
