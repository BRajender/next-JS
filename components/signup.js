import React, { useState } from "react";
import FormInput from "./forminput";

const Signup = props => {
  const [userdata, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
    address: ""
  });
  const input_placeholder = [
    {
      placeholder: "Enter your name",
      type: "text",
      name: "username",
      value: userdata.username
    },
    {
      placeholder: "Enter your Email",
      type: "text",
      name: "email",
      value: userdata.email
    },
    {
      placeholder: "Enter your Password",
      type: "password",
      name: "password",
      value: userdata.password
    },
    {
      placeholder: "Enter your MobileNumber",
      type: "text",
      name: "mobile",
      value: userdata.mobile
    },
    {
      placeholder: "Enter your Date of Birth",
      type: "date",
      name: "dob",
      value: userdata.dob
    }
  ];

  const handleChange = key => e => {
    setUserData({ ...userdata, [key]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(userdata);
  };
  return (
    <div className="row" id="a">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <div className="jumbotron mt-5">
          <div className="form-box">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Sign up now</h3>
                <p>Fill in the form below to get instant access:</p>
              </div>

              <div className="form-top-right">
                <i className="fa fa-pencil pencil-signup"></i>
              </div>
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

                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Enter your Adress"
                    value={userdata.address}
                    onChange={handleChange("address")}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" class="btn btn-primary">
                    Sign me up!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
