import React from "react";
import Card from "./card";
import FormInput from "./forminput";

const Form = props => {
  const input_labels = [
    {
      label: "Store Name",
      type: "text",
      name: "store_name",
      value: props.state.store_name
    },
    {
      label: "Store Address",
      type: "text",
      name: "location",
      value: props.state.location
    }
  ];

  return (
    <div className="container form-container">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-lg-4 col-4"></div>
        <div className="col-md-4 col-sm-4 col-lg-4 col-4">
          <form onSubmit={props.submitHandler}>
            {input_labels.map((option, index) => {
              return (
                <div>
                  <label>{option.label}</label>
                  <FormInput
                    option={option}
                    key={index}
                    changeHandler={props.changeHandler}
                  ></FormInput>
                </div>
              );
            })}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
