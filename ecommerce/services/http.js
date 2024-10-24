import axios from "axios";
import {
  getToken,
  trimData,
  getRefreshToken,
  saveToken,
  saveRefreshToken,
} from "@/libs/utils";
import Notify from "@/components/Notify/notifys";
import AuthenServices from "./AuthenServices";
import {
  HttpToken_ErrorInternal,
  HttpToken_Expired,
  HttpToken_NotFound,
  HttpToken_Success,
  HttpToken_UnAvailable,
  HttpUnAuthen,
} from "@/libs/constant";
import { Authen } from "@/reducers/actions/authentication";

var token = null;

try {
  token = getToken() || "";
} catch (ex) {
  console.log("error:", ex);
}
const instance = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    if (config.data) {
      config.data =
        config.data instanceof FormData ? config.data : trimData(config.data);
    }
    config.baseURL = process.env.NEXT_APP_BASE_API;
    if (config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // check error
    if (!response?.data?.isOk) {
      if (response.data.status == HttpUnAuthen) {
        console.log("res", response);
        if (response.data.object.code == HttpToken_NotFound) {
          Notify.Error(response.data.object.message);
        } else if (response.data.object.code == HttpToken_Expired) {
          const query = [
            {
              key: "code",
              value: getRefreshToken(),
            },
          ];
          AuthenServices.RefreshToken(query).then((res) => {
            if (res?.object?.code == HttpToken_NotFound) {
              return;
            }
            if (res?.object?.code == HttpToken_UnAvailable) {
              return;
            }
            if (res?.object?.code == HttpToken_Expired) {
              return;
            }
            if (res?.object?.code == HttpToken_Success) {
              saveToken(res?.object?.token);
              saveRefreshToken(res?.object?.refreshToken);
              response.config.headers[
                "Authorization"
              ] = `Bearer ${res?.object?.token}`;
              return axios.request(response.config);
            }
          });
        } else if (response.data.object.code == HttpToken_ErrorInternal) {
          Notify.Error(response?.data?.object?.message);
        }
      } else Notify.Error(response?.data?.object);
    }

    return response.data;
  },
  function (error) {
    console.log("error", error);
    Notify.Error("Internal Server Error.");
    return Promise.reject(error);
  }
);

export default instance;
