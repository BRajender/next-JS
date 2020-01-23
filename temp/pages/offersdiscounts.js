import React from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";

import Layout from "../components/admin_layout";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import SideBarContent from "../components/sidebarcontent";
import SideBarWrapper from "../components/sidebarwrapper";
const Insights = () => (
  <div>
    <Head>
      <title>My styled page</title>
      <link href="/static/sidebarstyles.css" rel="stylesheet" />
    </Head>
    <Layout>
      <NavBar></NavBar>
      <SideBarWrapper>
        <SideBar></SideBar>
        <SideBarContent>
          <h1>This is Offers Page</h1>
        </SideBarContent>
      </SideBarWrapper>
    </Layout>
  </div>
);

export default Insights;
