import React, { useState } from "react";
import "../static/card.css";
import FormInput from "./forminput";

const Login = props => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const input_placeholder = [
    {
      placeholder: "Enter your User name",
      type: "text",
      name: "username",
      value: state.username
    },
    {
      placeholder: "Enter your Password",
      type: "password",
      name: "password",
      value: state.password
    }
  ];

  const handleChange = key => e => {
    setState({ ...state, [key]: e.target.value });
  };
  const submitHandler = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="container-fluid">
      <div className="row" id="b">
        <div className="col-sm-3 col-md-3 col-lg-3 col-3"></div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-6">
          <div className="jumbotron mt-5">
            <div className="form-box">
              <div className="form-top">
                <div className="form-top-left">
                  <h3>Sign In</h3>
                  <p>Sign in to get instant access:</p>
                </div>

                <div className="form-top-right"></div>
              </div>

              <div className="form-bottom">
                <form onSubmit={submitHandler}>
                  {input_placeholder.map((option, index) => {
                    return (
                      <div>
                        <FormInput
                          option={option}
                          key={index}
                          changeHandler={handleChange(option.name)}
                        ></FormInput>
                      </div>
                    );
                  })}

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3 col-3"></div>
      </div>
    </div>
  );
};

export default Login;
