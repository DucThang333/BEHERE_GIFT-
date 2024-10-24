import React from "react";

const TableNor = ({ column = [], data = [], isSelectRow = true }) => {
  const size = column.reduce((acc, c) => (acc += c.size), 0);
  console.log(isSelectRow);
  const handleSelectRow = (select) => {
    console.log(select);
  };
  let dataHeader = column.map((c) => {
    return (
      <th
        key={c.id}
        style={{
          width: `${((c?.size / size) * 100).toFixed(0)}%`,
        }}
        className="border-2 border-gray-200"
      >
        <div className="min-h-12 flex items-center ml-3 text-sm">{c?.name}</div>
      </th>
    );
  });
  const dataTable = data.map((d, index) => {
    let value = [];

    // fill value
    column.map((c, index) => {
      value.push(
        <td
          key={index}
          className={"border-2 border-gray-200"}
          onClick={
            isSelectRow
              ? !c?.action
                ? () => handleSelectRow(d)
                : undefined
              : undefined
          }
        >
          <div
            className="min-h-12 flex items-center ml-3 text-sm"
            style={{ wordBreak: "break-word" }}
          >
            {typeof c.render == "function" ? c.render(d) : d[c?.key]}
          </div>
        </td>
      );
    });

    // return row for table
    return (
      <tr
        key={index}
        className={"table-row hover:bg-blue-50 cursor-pointer duration-100"}
      >
        {value}
      </tr>
    );
  });
  return (
    <div className="w-ful select-none">
      <table className="w-full">
        <thead className="w-full min-h-10">
          <tr>{dataHeader}</tr>
        </thead>
        <tbody className="w-full ">{dataTable}</tbody>
      </table>
    </div>
  );
};

export default TableNor;
