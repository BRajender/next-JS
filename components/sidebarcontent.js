import React from "react";

const SideBarContent = props => {
  return (
    <div className="content">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default SideBarContent;
