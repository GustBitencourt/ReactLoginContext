import axios from "axios";

export const api = axios.create({
    baseURL: "localhost:8080"
});

export const createSession = async (email, password) => {
    return api.post("/sessions", {email, password});
}