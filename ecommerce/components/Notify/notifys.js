import React, { useState } from "react";
import NotifyComponent from "./component/notify";

let WarningFunc;
let ErrorFunc;
let SuccessFunc;
let InforFunc;

let CancleNotify;

const NotifyFormat = {
  warning: {
    icon: {
      src: "/alert_warning.svg",
      width: 50,
      height: 50,
      alt: "icon alert warning",
    },
    style: {
      NotifyBox: {
        backgroundColor: "rgb(240 245 190 / 85%)",
        borderColor: "rgb(208 214 143 / 85%)",
      },
      NotifyText: {
        color: "#af884e",
      },
    },
  },
  error: {
    icon: {
      src: "/alert_error.svg",
      width: 50,
      height: 50,
      alt: "icon alert error",
    },
    style: {
      NotifyBox: {
        backgroundColor: "rgb(255 0 0 / 26%)",
        borderColor: "rgb(250 0 0 / 85%)",
      },
      NotifyText: {
        color: "rgb(170 14 4)",
      },
    },
  },
  success: {
    icon: {
      src: "/alert_success.svg",
      width: 50,
      height: 50,
      alt: "icon alert success",
    },
    style: {
      NotifyBox: {
        backgroundColor: "rgb(22 255 0 / 26%)",
        borderColor: "rgb(0 250 25 / 98%)",
      },
      NotifyText: {
        color: "#097a15",
      },
    },
  },
  infor: {
    icon: {
      src: "/alert_infor.svg",
      width: 50,
      height: 50,
      alt: "icon alert infor",
    },
    style: {
      NotifyBox: {
        backgroundColor: "rgb(0 181 255 / 26%)",
        borderColor: "rgb(0 157 250 / 98%)",
      },
      NotifyText: {
        color: "#092b7a",
      },
    },
  },
};

export const NotifyWarning = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleOpen = (msg) => {
    if (CancleNotify) {
      CancleNotify();
      setTimeout(() => {
        CancleNotify = () => setOpen(false);
        setMessage(msg);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
          CancleNotify = null;
        }, 6000);
      }, 500);
    } else {
      CancleNotify = () => setOpen(false);
      setMessage(msg);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        CancleNotify = null;
      }, 6000);
    }
  };
  WarningFunc = handleOpen;
  return (
    <NotifyComponent
      title="Warning"
      open={open}
      onCancle={() => setOpen(false)}
      message={message}
      NotifyFormat={NotifyFormat.warning}
    />
  );
};

export const NotifyError = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = (msg) => {
    if (CancleNotify) {
      CancleNotify();
      setTimeout(() => {
        CancleNotify = () => setOpen(false);
        setMessage(msg);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
          CancleNotify = null;
        }, 6000);
      }, 500);
    } else {
      CancleNotify = () => setOpen(false);
      setMessage(msg);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        CancleNotify = null;
      }, 6000);
    }
  };
  ErrorFunc = handleOpen;
  return (
    <NotifyComponent
      title="Error"
      open={open}
      onCancle={() => setOpen(false)}
      message={message}
      NotifyFormat={NotifyFormat.error}
    />
  );
};

export const NotifySuccess = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = (msg) => {
    if (CancleNotify) {
      CancleNotify();
      setTimeout(() => {
        CancleNotify = () => setOpen(false);
        setMessage(msg);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
          CancleNotify = null;
        }, 6000);
      }, 500);
    } else {
      CancleNotify = () => setOpen(false);
      setMessage(msg);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        CancleNotify = null;
      }, 6000);
    }
  };
  SuccessFunc = handleOpen;
  return (
    <NotifyComponent
      title="Success"
      open={open}
      onCancle={() => setOpen(false)}
      message={message}
      NotifyFormat={NotifyFormat.success}
    />
  );
};

export const NotifyInfor = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = (msg) => {
    if (CancleNotify) {
      CancleNotify();
      setTimeout(() => {
        CancleNotify = () => setOpen(false);
        setMessage(msg);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
          CancleNotify = null;
        }, 6000);
      }, 500);
    } else {
      CancleNotify = () => setOpen(false);
      setMessage(msg);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        CancleNotify = null;
      }, 6000);
    }
  };
  InforFunc = handleOpen;
  return (
    <NotifyComponent
      title="Infor"
      open={open}
      onCancle={() => setOpen(false)}
      message={message}
      NotifyFormat={NotifyFormat.infor}
    />
  );
};

const Notify = {
  Warning: (Message) => {
    if (WarningFunc) {
      WarningFunc(Message);
    } else {
      console.error("Notify warning component not mounted");
    }
  },
  Error: (Message) => {
    if (ErrorFunc) {
      ErrorFunc(Message);
    } else {
      console.error("Notify error component not mounted");
    }
  },
  Success: (Message) => {
    if (SuccessFunc) {
      SuccessFunc(Message);
    } else {
      console.error("Notify success component not mounted");
    }
  },
  Infor: (Message) => {
    if (InforFunc) {
      InforFunc(Message);
    } else {
      console.error("Notify infor component not mounted");
    }
  },
};

export default Notify;
