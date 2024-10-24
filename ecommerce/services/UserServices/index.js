import { GET_IDENTIFIER } from "./constant";

import http from "../http";

const GetIdentifier = () => http.get(GET_IDENTIFIER);

const UserService = {
  GetIdentifier: GetIdentifier,
};
export default UserService;
