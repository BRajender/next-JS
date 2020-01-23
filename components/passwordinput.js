import React, { useState, useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import "../static/card.css";

const PasswordInput = props => {
  const [hide, setHide] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-lg-4 col-4"></div>
        <div className="col-md-4 col-sm-4 col-lg-4 col-4">
          <div className="form-group">
            <input
              className="form-control"
              type={hide ? "password" : "text"}
              placeholder="Enter your Password"
            />
            <div
              className="eye-icon"
              onClick={() => {
                setHide(!hide);
              }}
            >
              {hide ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4 col-4"></div>
      </div>
    </div>
  );
};

export default PasswordInput;
