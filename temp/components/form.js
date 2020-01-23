import React from "react";
import Card from "./card";

const Form = ({ state, changeHandler, submitHandler }) => {
  return (
    <div className="container form-container">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-lg-4 col-4"></div>
        <div className="col-md-4 col-sm-4 col-lg-4 col-4">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label>Store Name</label>
              <input
                type="text"
                name="store_name"
                value={state.store_name}
                onChange={changeHandler}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Store Address</label>
              <input
                type="text"
                name="location"
                value={state.location}
                onChange={changeHandler}
                className="form-control"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
