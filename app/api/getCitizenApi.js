import apiClient from "./client";

const getCitizen = (data) => apiClient.post("/citizen", data);

export default { getCitizen };
