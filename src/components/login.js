import { useState } from "react";
import AuthUser from "./AuthUser";
import "./login.css";

export default function Login() {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    // api call
    http.post("/login", { email: email, password: password }).then((res) => {
      setToken(res.data.user, res.data.access_token);
    });
  };

  return (
    <div className="container p-5">
      <div className="row justify-content-center pt-5">
        <div className="col-sm-6 my-5">
          <div className="card p-4 login-card">
            <h1 className="text-center mb-3">Login </h1>
            <p className="text-center mb-3">Enter your account login details</p>
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
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
