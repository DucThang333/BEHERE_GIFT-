"use client";
import React, { Suspense, useEffect } from "react";
import Sidebar from "@/components/Layout/Sidebar";
import NavbarManage from "@/components/Layout/navbar/navbarManage";
import "./style.css";
const Layout = ({ children }) => {
  useEffect(() => {
    console.log("tab");
  }, []);

  return (
    <div className="flex">
      <div className="manage-sidebar">
        <Suspense>
          <Sidebar />
        </Suspense>
      </div>
      <div className="manage-content">
        <div className="navbar-manage">
          <Suspense>
            <NavbarManage />
          </Suspense>
        </div>
        <div className="manage-main-content">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
