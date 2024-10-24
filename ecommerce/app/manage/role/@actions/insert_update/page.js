"use client";
import InsertUpdateRole from "@/components/Pages/Admin/Role/insertUpdateRole";
import Login from "@/components/Layout/Login";

const Data = {
  roleName: "Admin",
  function: [
    {
      id: 1,
      categoryName: "Dashboard",
      function: [
        {
          functionID: 1,
          functionName: "IsVisit",
        },
      ],
    },
    {
      id: 2,
      categoryName: "Chart",
      function: [
        {
          functionID: 2,
          functionName: "Chart Price",
        },
        {
          functionID: 3,
          functionName: "Chart Column",
        },
      ],
    },
  ],
};

const InsertOrUpdate = () => {
  return <InsertUpdateRole />;
};

export default InsertOrUpdate;
