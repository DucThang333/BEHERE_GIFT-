import React, { useEffect } from "react";
import {
  NotifyWarning,
  NotifyError,
  NotifySuccess,
  NotifyInfor,
} from "./notifys";

const Notification = () => {
  return (
    <>
      <NotifyWarning />
      <NotifyError />
      <NotifySuccess />
      <NotifyInfor />
    </>
  );
};

export default Notification;
