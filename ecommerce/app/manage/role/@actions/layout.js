import React from "react";

const Layout = ({ children, actions }) => {
  return (
    <div>
      {actions}
      {children}
    </div>
  );
};

export default Layout;
