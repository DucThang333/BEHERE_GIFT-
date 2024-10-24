import React from "react";

const Table = ({
  isMultipleSelect = false,
  multiSelect = [],
  setMultiSelect = () => {},
  isSelectRow = false,
  isIndex = false,
  data = [],
  column = [],
}) => {
  const size = column.reduce((acc, c) => (acc += c.size), 0);

  const handleSelectRow = (select) => {
    if (typeof isSelectRow === "function") isSelectRow(select);
  };

  const handleSelectCheckBox = (e, select) => {
    if (e.target.checked) {
      setMultiSelect([...multiSelect, select]);
      return;
    }
    setMultiSelect(multiSelect.filter((m) => m.id != select.id));
  };
  const handleSelectAllCheckBox = () => {
    if (multiSelect.length == data.length) {
      setMultiSelect([]);
      return;
    }
    setMultiSelect(data);
  };

  let dataHeader = column.map((c) => {
    return (
      <th
        key={c.id}
        style={{
          width: `${((c?.size / size) * 100).toFixed(0)}%`,
        }}
      >
        <div className="min-h-16 flex items-center ml-3 text-base">
          {c?.name}
        </div>
      </th>
    );
  });

  isIndex &&
    (dataHeader = [
      <th key={-1} className="w-5 cursor-pointer">
        <div className="min-h-16 flex items-center justify-center text-base w-16">
          Index
        </div>
      </th>,
      ...dataHeader,
    ]);

  isMultipleSelect &&
    (dataHeader = [
      <th key={-2} className="w-5 cursor-pointer">
        <div className="min-h-16 flex items-center justify-center w-16">
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={multiSelect.length == data.length}
            onChange={() => handleSelectAllCheckBox()}
          />
        </div>
      </th>,
      ...dataHeader,
    ]);

  //const displayData = "";
  const dataTable = data.map((d, index) => {
    let value = [];
    // check multiple select
    isMultipleSelect &&
      value.push(
        <td
          key={-2}
          className="border-r-2 border-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="min-h-14 flex items-center justify-center">
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer"
              checked={multiSelect.find((m) => m.id == d.id) || false}
              onChange={(e) => handleSelectCheckBox(e, d)}
            />
          </div>
        </td>
      );
    isIndex &&
      value.push(
        <td
          key={-1}
          className="border-r-2 border-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="min-h-14 flex items-center justify-center">
            {index}
          </div>
        </td>
      );

    // fill value
    column.map((c, index) => {
      value.push(
        <td
          key={index}
          className={index < column.length - 1 ? "border-r-2 border-white" : ""}
        >
          <div
            className="min-h-14 flex items-center ml-3 text-sm"
            style={{ wordBreak: "break-word" }}
          >
            {d[c?.key]}
          </div>
        </td>
      );
    });

    // return row for table
    return (
      <tr
        key={d.id}
        className={`${
          !(index % 2) && "bg-slate-200"
        } table-row hover:bg-blue-50 cursor-pointer duration-100`}
        onClick={() => handleSelectRow(d)}
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

export default Table;
