import React, { useState } from "react";

const Layout = props => {
  const [state, setState] = useState({ store_name: "", location: "" });
  return <div>{props.children}</div>;
};

export default Layout;
