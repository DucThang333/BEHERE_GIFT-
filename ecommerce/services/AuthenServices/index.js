import { LOGIN, REFRESH_TOKEN, REGISTER } from "./contant";

import http from "../http";
import { filterQuery } from "@/libs/utils";

const Login = (body) => http.post(LOGIN, body);
const Register  = (body) => http.post(REGISTER,body)
const RefreshToken = (query) => http.post(filterQuery(REFRESH_TOKEN, query));
const AuthenServices = {
  Login: Login,
  RefreshToken: RefreshToken,
  Register:Register
};

export default AuthenServices;
