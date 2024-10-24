import { GET_ALL, GET, CREATE, UPDATE, GET_FUNCTION, DELETE } from "./constant";

import http from "../http";
import { filterQuery, filterRoute } from "@/libs/utils";

const Get = (query) => http.get(filterQuery(GET, query));
const GetFunction = () => http.get(GET_FUNCTION);
const GetAll = () => http.get(GET_ALL);
const Create = (body) => http.post(CREATE, body);
const Update = (body) => http.put(UPDATE, body);
const Delete = (id) => http.patch(filterRoute(DELETE, id));

const RoleService = {
  Get: Get,
  GetAll: GetAll,
  Create: Create,
  Update: Update,
  GetFunction: GetFunction,
  Delete: Delete,
};

export default RoleService;
