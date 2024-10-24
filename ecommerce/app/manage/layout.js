"use client";
import React, { Suspense, useEffect } from "react";
import Sidebar from "@/components/Layout/Sidebar";
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
