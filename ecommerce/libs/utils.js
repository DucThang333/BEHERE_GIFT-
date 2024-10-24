export const trimData = (data) => {
  if (!data) return data;
  const tempData = Array.isArray(data) ? [] : {};
  Object.keys(data).map((key) => {
    if (typeof data[key] === "string") tempData[key] = data[key].trim();
    else if (typeof data[key] === "object") tempData[key] = trimData(data[key]);
    else tempData[key] = data[key];
  });

  return tempData;
};

export const validateRegex = (obj, strRegex) => {
  const regex = new RegExp(strRegex);
  return regex.test(obj);
};

export const filterQuery = (api, query) => {
  const queryString = query
    .map((param) => `${param.key}=${encodeURIComponent(param.value)}`)
    .join("&");
  return api + "?" + queryString;
};

export const filterRoute = (api, route) => {
  return api + "/" + encodeURIComponent(route);
};

export const saveToken = (token) => {
  localStorage.setItem("Token", token);
};
export const getToken = () => {
  return localStorage.getItem("Token");
};
export const saveRefreshToken = (refreshToken) => {
  localStorage.setItem("RefreshToken", refreshToken);
};

export const getRefreshToken = () => {
  return localStorage.getItem("RefreshToken");
};
