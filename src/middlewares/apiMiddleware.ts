import axios from "axios";
//===================================================
// Api Types
//===================================================
export const API = "API";
export const ACCESS_DENIED = "ACCESS_DENIED";
export const API_ERROR = "API_ERROR";

//===================================================
// Api Actions
//===================================================
export const accessDenied = (url:any) => ({
  type: ACCESS_DENIED,
  payload: {
    url
  }
});

export const apiError = (error:any) => ({
  type: API_ERROR,
  error
});

//===================================================
// Api Middleware
//===================================================
export const apiMiddleware = (store: any) => (next: any) => (action:any) => {
  const dispatch = store.dispatch;
  // continue propagating the action through redux
  next(action);
  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    headers,
    contentType,
  } = action.payload;
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  // axios default configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
  if(contentType){
    axios.defaults.headers.common["Content-Type"] = contentType; //"application/json";
  }
  if(accessToken){
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(apiError(error));
      dispatch(onFailure(error));

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .finally(() => {
     
    });
};


//===================================================
// Api Action
//===================================================

export function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null,
  contentType = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride,
      contentType
    }
  };
}
