import React from "react";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-menu">
          <ul className="list-group">
            <li className="list-group-item">
              <Link href="/dashboard">
                <a>
                  <i className="fas fa-th-large"></i>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/information">
                <a>
                  <i className="fas fa-th-large"></i>
                  <span>Information</span>
                </a>
              </Link>
            </li>
            <li className="list-group-item "></li>
            <li className="list-group-item">
              <a>
                <i className="fas fa-th-large"></i>
                <span>Insights</span>
              </a>
            </li>
            <li className="list-group-item">
              <Link href="/offersdiscounts">
                <a>
                  <i className="fas fa-th-large"></i>
                  <span>Offers and Discount</span>
                </a>
              </Link>
            </li>
            <li className="list-group-item divider">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span className="sub-heading">E-commerce</span>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span>Catalouge</span>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span>Coupans(Active,Expired,Create)</span>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span>Orders</span>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span>Payments(Invoice,Taxes)</span>
              </a>
            </li>
            <li className="list-group-item divider">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span className="sub-heading">Communication</span>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span>Messaging</span>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <i className="fas fa-th-large"></i>
                <span>Reviews and Rating</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
