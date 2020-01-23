import React from "react";

const FormInput = props => {
  const placeholder = props.option.placeholder;

  return (
    <div className="form-group">
      <input
        className="form-control"
        type={props.option.type}
        name={props.option.name}
        value={props.option.value}
        onChange={props.changeHandler}
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
};
export default FormInput;
