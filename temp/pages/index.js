import React from "react";
import Head from "next/head";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/admin_layout";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import SideBarContent from "../components/sidebarcontent";
import SideBarWrapper from "../components/sidebarwrapper";
import Form from "../components/form";
import Card from "../components/card";
import App from "../components/app";
const Index = () => (
  <div>
    <Head>
      <title>My styled page</title>
      {/* <link href="/static/sidebarstyles.css" rel="stylesheet" /> */}
    </Head>
    {/* <Layout>
      <NavBar></NavBar>

      <SideBarWrapper>
        <SideBar></SideBar>
        <SideBarContent>
          <h1>This is Index Page</h1>
        </SideBarContent>
      </SideBarWrapper>
    </Layout> */}

    <App />
  </div>
);

export default Index;
