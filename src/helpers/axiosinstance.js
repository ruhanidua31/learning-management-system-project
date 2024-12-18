import axios from "axios";

const BASE_URL = "http://localhost:5173/";

const axiosinstance = axios.create();
axiosinstance.defaults.baseurl = BASE_URL;
axiosinstance.defaults.withCredentials = true;

export default axiosinstance;