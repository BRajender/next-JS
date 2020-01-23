import React from "react";

const SideBarWrapper = props => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-body">
        <div className="wrapper">{props.children}</div>
      </div>
    </div>
  );
};

export default SideBarWrapper;
