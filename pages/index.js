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
import DataFetching from "../components/datafetching"
import Login from "../components/login"
import Signup from "../components/signup"
import InputField from "../components/forminput"
import PasswordInput from "../components/passwordinput"
import MaterialCard from "../components/materialcard"
import MultiCarousel from "../components/carousel"
import ProgressBar from "../components/progressbar"
import TaskLogin from "../components/task_login"
import TaskDashBoard from "../components/task_dashboard"

const Index = () => (
  <div>
    <Head>
      <title>My styled page</title>
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
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

     {/* <App /> */}
    {/* <DataFetching></DataFetching> */}
    {/* <Login></Login> */}
    {/* <Signup></Signup> */}
    {/* <InputField></InputField> */}
    {/* <PasswordInput></PasswordInput> */}
    {/* <Card></Card> */}
    {/* <MaterialCard></MaterialCard> */}
    {/* <MultiCarousel></MultiCarousel>
    <ProgressBar></ProgressBar> */}
    <TaskLogin></TaskLogin>
    {/* <TaskDashBoard></TaskDashBoard> */}
  </div>
);

export default Index;
