import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.29.246:8200/",
});

export default apiClient;
