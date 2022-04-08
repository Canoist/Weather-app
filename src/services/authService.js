import axios from "axios";
import configFile from "../config.json";
import localStorageService from "./localStorageService";

const httpAuth = axios.create({
    baseURL: configFile.apiEndPoint + "/auth/",
    params: { key: process.env.REACT_APP_FIREBASE_KEY }
});

const authService = {
    register: async ({ email, password }) => {
        const { data } = await httpAuth.post("signUp", {
            email,
            password,
            returnSecureToken: true
        });
        return data;
    },
    login: async ({ email, password }) => {
        const { data } = await httpAuth.post("signInWithPassword", {
            email,
            password,
            returnSecureToken: true
        });
        return data;
    },
    refresh: async () => {
        const { data } = await httpAuth.post("token", {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
