import { GET_ALL } from "./constant";

import http from "../http";

const GetAll = () => http.get(GET_ALL);

const SystemKeyService = {
  GetAll: GetAll,
};

export default SystemKeyService;
