import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

axios.interceptors.request.use(
  (config) => {
    //request ขายิงข้อมูลหา server response server ส่งข้อมูลกลับมา
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
