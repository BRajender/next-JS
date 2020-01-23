import React from "react";
import "../static/styles.css";
const NavBar = () => {
  return (
    <div className="container-fluid header-start">
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div className="toolbar_toggle-button">
            <button className="toggle-button">
              <div className="toggle-button_line"></div>
              <div className="toggle-button_line"></div>
              <div className="toggle-button_line"></div>
            </button>
          </div>
          <div>
            {" "}
            <a href="/">
              <img className="logo-img" src="/images/fashopi_blue_logo.png" />
            </a>
          </div>
          <div className="spacer"></div>
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <a className="abc">Boutiques</a>
              </li>
              <li>
                <a className="abc">Expos</a>
              </li>
              <li>
                <a className="abc">Malls</a>
              </li>
              <li>
                <button className="loginbtn">Login</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
    // <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top top-navbar">
    //   <a className="navbar-brand" href="#">
    //     <img src="../images/fashopi_logo.png" alt="logo" />
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarText"
    //     aria-controls="navbarText"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarText">
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="#">
    //           Settings <span className="sr-only">(current)</span>
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           Support
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           Logout
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default NavBar;
