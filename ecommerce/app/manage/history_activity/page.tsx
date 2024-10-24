"use client";
import Table from "@/components/Table";
import React from "react";
const data = [
  {
    id: 1,
    index: "Arisatou ",
    name: "First value First valueFirst v",
  },
  {
    id: 2,
    index: "STT - 2",
    name: "",
  },
  {
    id: 3,
    index: "STT - 2",
    name: "second value",
  },
  { id: 4, index: "STT - 2", name: "second value" },
  { id: 5, index: "STT - 2", name: "second value" },
];
const column = [
  {
    id: 1,
    name: "ID",
    size: 10,
    sort: true,
    key: "index",
  },
  {
    id: 2,
    size: 10,
    name: "Name",
    sort: false,
    key: "name",
  },
  {
    id: 3,
    size: 10,
    name: "Position",
    sort: false,
    key: "name",
  },
  {
    id: 4,
    size: 10,
    name: "Office",
    sort: false,
    key: "name",
  },
  {
    id: 5,
    size: 10,
    name: "Action",
    sort: false,
    key: "name",
  },
];
const HistoryActivity = () => {
  return (
    <div className="w-full bg">
      <div className="">
        <div className=""></div>
      </div>
      <div className="m-auto w-10/12">
        <Table column={column} data={data} />
      </div>
    </div>
  );
};

export default HistoryActivity;
