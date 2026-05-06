import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiUrl
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status == 403 || error.response.status == 401) {
      // localStorage.clear()
      // location.reload()
    }
    return Promise.reject(error);
  },
);

export default api;
