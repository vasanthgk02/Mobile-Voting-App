import apiClient from "./client";
const getParty = () => apiClient.get("/party");

export default { getParty };
