"use client";
import React, { useEffect, useState } from "react";
import TableNor from "@/components/Table/tableNor";
import ButtonAction from "../../../components/Button/buttonAction";
import InsertUpdateRole from "@/components/Pages/Admin/Role/insertUpdateRole";
import RoleService from "@/services/RoleServices";

const Role = () => {
  const [data, setData] = useState([]);
  const [modelInsertUpdate, setModelInsertUpdate] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    RoleService.GetAll().then((res) => {
      if (!res?.isOk) return;
      setData(res?.object?.Data);
    });
  };

  const handleDelete = (select) => {
    RoleService.Delete(select?.roleID).then((res) => {
      if (!res?.isOk) return;
      getData();
    });
  };

  const handleInsert = (body) => {
    RoleService.Create(body).then((res) => {
      if (!res?.isOk) return;
      getData();
      setModelInsertUpdate(null);
    });
  };
  const handleUpdate = (body) => {
    console.log("body", body);
    RoleService.Update(body).then((res) => {
      if (!res?.isOk) return;
      getData();
      setModelInsertUpdate(null);
    });
  };

  const handleOpenModleUpdate = (e) => {
    setModelInsertUpdate(
      <InsertUpdateRole
        onCancle={() => setModelInsertUpdate(null)}
        onOk={(body) => handleUpdate(body)}
        roleID={e?.roleID}
      />
    );
  };

  const handleOpenModelInsert = () => {
    setModelInsertUpdate(
      <InsertUpdateRole
        onCancle={() => setModelInsertUpdate(null)}
        onOk={(body) => handleInsert(body)}
      />
    );
  };

  const column = [
    {
      id: 2,
      size: 10,
      name: "Name",
      sort: false,
      key: "name",
      action: false,
    },
    {
      id: 3,
      size: 30,
      name: "Description",
      sort: false,
      key: "description",
      action: false,
    },
    {
      id: 5,
      size: 10,
      name: "Action",
      sort: false,
      key: "action",
      action: true,
      render: (e) => (
        <>
          {button.map((b) => (
            <div className="m-2" key={b.key}>
              {b.component(e)}
            </div>
          ))}
        </>
      ),
    },
  ];

  const button = [
    {
      key: "Update",
      component: (e) => (
        <ButtonAction
          className={
            "bg-yellow-600 rounded-md hover:scale-105 duration-100 hover:bg-yellow-700 text-gray-100"
          }
          bgColor="bg-slate-400"
          width={80}
          height={40}
          title={"Update"}
          onFunc={() => handleOpenModleUpdate(e)}
        />
      ),
    },
    {
      key: "Delete",
      component: (e) => (
        <ButtonAction
          className={
            "bg-red-600 rounded-md hover:scale-105 hover:bg-red-700 duration-100 text-gray-100"
          }
          bgColor="bg-slate-400"
          width={80}
          height={40}
          title={"Delete"}
          onFunc={() => handleDelete(e)}
        />
      ),
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="h-24 pt-5">
          <div className="ml-5 text-lg font-bold">Permission</div>
        </div>
        <div className="m-auto mt-5 pb-14 w-10/12">
          <div className="w-full flex justify-end mb-5">
            <ButtonAction
              className={
                "bg-emerald-600 rounded-md hover:scale-105 hover:bg-emerald-700 duration-100 text-gray-100"
              }
              bgColor="bg-slate-400"
              width={80}
              height={40}
              title={"Insert"}
              onFunc={handleOpenModelInsert}
            />
          </div>
          <TableNor column={column} data={data} />
        </div>
      </div>
      {modelInsertUpdate}
    </>
  );
};

export default Role;
