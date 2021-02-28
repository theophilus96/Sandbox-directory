import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/config";
//picture
import CraneLogo from "../img/CraneLogo.jpg";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center gx-0 min-vh-100">
          <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">
            {/* <!-- Heading --> */}
            <h1 className="mb-0 fw-bold">Sign up</h1>

            {/* <!-- Text --> */}
            <p className="mb-6 text-muted">
              Simplify your workflow in minutes.
            </p>

            {/* <!-- Form --> */}
            <form className="mb-6">
              {/* <!-- Email --> */}
              <div className="form-group">
                <label className="form-label" for="email">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@address.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              {/* <!-- Password --> */}
              <div className="form-group mb-5">
                <label className="form-label" for="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>

              {/* <!-- Submit --> */}
              <button
                className="btn w-100 btn-primary"
                type="submit"
                onClick={signIn}
              >
                Sign up
              </button>
            </form>

            {/* <!-- Text --> */}
            <p className="mb-0 fs-sm text-muted">
              Already have an account?{" "}
              <button href="" onClick={register}>
                Log in
              </button>
              .
            </p>
          </div>
          <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">
            {/* <!-- Image --> */}
            <div
              className="h-100 w-cover bg-cover"
              style={{
                backgroundImage: `url(${CraneLogo}})`,
              }}
            ></div>

            {/* <!-- Shape --> */}
            <div className="shape shape-start shape-fluid-y svg-shim text-white">
              <svg
                viewBox="0 0 100 1544"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h100v386l-50 772v386H0V0z" fill="currentColor" />
              </svg>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
