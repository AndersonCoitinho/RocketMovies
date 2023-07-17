import axios from "axios";
export const api = axios.create({
    baseURL: "https://movies-api-jxvm.onrender.com"
});
