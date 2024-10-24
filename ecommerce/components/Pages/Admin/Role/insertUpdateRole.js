import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Model from "@/components/Model";
import InputRadio from "@/components/Input/inputRadio";
import InputCheckbox from "@/components/Input/inputCheckbox";
import ButtonBasic from "@/components/Button/buttonBasic";
import RoleService from "@/services/RoleServices";

const InsertUpdateRole = ({
  onCancle = () => {},
  onOk = () => {},
  roleID = null,
}) => {
  const [isInsert, setIsInsert] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    functions: [],
  });
  useEffect(() => {
    if (roleID) {
      getDataUpdate();
      setIsInsert(false);
      return;
    }
    getDataInsert();
    setIsInsert(true);
  }, []);

  const getDataInsert = () => {
    RoleService.GetFunction().then((res) => {
      if (!res?.isOk) return;
      setData({ ...data, functions: res?.object?.Data });
    });
  };
  const getDataUpdate = () => {
    const query = [{ key: "id", value: roleID }];
    RoleService.Get(query).then((res) => {
      if (!res?.isOk) return;
      setData(res?.object?.Data);
    });
  };
  const handleSubmit = () => {
    const functionFilter = data?.functions
      ?.map((f) =>
        f?.subFunction
          ?.map((sub) => {
            if (sub?.isAccept == true) {
              return sub?.functionID;
            }
          })
          .filter(Boolean)
      )
      .flat();
    let body = {
      Name: data?.name,
      Description: data?.description,
      FunctionIDs: functionFilter,
    };
    if (!isInsert) {
      body = { ...body, RoleID: roleID };
    }
    onOk(body);
  };

  const handleOnchangeCheckbox = (e, select) => {
    setData({
      ...data,
      functions: data?.functions?.map((d) => ({
        ...d,
        subFunction: d?.subFunction?.map((sub) => {
          if (sub?.functionID == select?.functionID)
            return {
              ...sub,
              isAccept: e.target.checked,
            };
          return sub;
        }),
      })),
    });
  };

  const handleCheckboxAll = (e, select) => {
    console.log("e", e);
    console.log("select", select);
    const dataFilter = {
      ...data,
      functions: data?.functions?.map((f) => {
        if (f?.categoryID === select?.categoryID) {
          return {
            ...f,
            subFunction: f?.subFunction?.map((sub) => ({
              ...sub,
              isAccept: e.target.checked,
            })),
          };
        }
        return f;
      }),
    };
    setData(dataFilter);
  };

  return (
    <Model onCancle={onCancle} title={`${isInsert ? "Create" : "Update"} Role`}>
      <form
        style={{ width: "1200px", paddingBottom: "40px" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-full mt-3">
          <div className="font-bold text-lg flex">
            Role:
            <div className="font-medium ml-2">
              <input
                autoFocus={true}
                value={data?.name}
                placeholder="Enter role name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
          </div>
          <div className="font-bold text-lg flex mt-3">
            Description:
            <div className="font-medium ml-2">
              <input
                value={data?.description}
                placeholder="Enter description name"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <hr className="mt-7" />
        <div className="w-full mt-7 mb-12">
          {data?.functions?.length > 0 &&
            data.functions.map((f) => (
              <div key={f?.categoryID}>
                <div className="mt-4">
                  <div className="text-lg font-semibold">{f?.categoryName}</div>
                  <div className="flex mt-2">
                    {f?.subFunction?.length > 0 && (
                      <>
                        <div key={"All"} className="ml-5">
                          <InputCheckbox
                            width={16}
                            height={16}
                            checked={
                              !f?.subFunction.find(
                                (sub) => sub?.isAccept === false
                              )
                            }
                            onChange={(e) => handleCheckboxAll(e, f)}
                            label={<div className="ml-2 font-medium">All</div>}
                          />
                        </div>
                        {f.subFunction.map((subF) => (
                          <div key={subF?.functionID} className="ml-5">
                            <InputCheckbox
                              width={16}
                              height={16}
                              checked={subF?.isAccept}
                              onChange={(e) => handleOnchangeCheckbox(e, subF)}
                              label={
                                <div className="ml-2 font-medium">
                                  {subF?.functionName}
                                </div>
                              }
                            />
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <hr className="mt-7" />
              </div>
            ))}
        </div>
        <div className="mt-7 flex justify-end">
          <div>
            <ButtonBasic title={"Cancle"} onFunc={onCancle} />
          </div>
          <div className="ml-5">
            <ButtonBasic
              type={"submit"}
              title={"Submit"}
              onFunc={handleSubmit}
            />
          </div>
          <dialog></dialog>
        </div>
      </form>
    </Model>
  );
};

export default InsertUpdateRole;
