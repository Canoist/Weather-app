import httpService from "./httpService";
import localStorageService from "./localStorageService";

const userEndPoint = "user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndPoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            userEndPoint + localStorageService.getUserId(),
            payload
        );
        return data;
    },
    patch: async (payload) => {
        const { data } = await httpService.patch(
            userEndPoint + localStorageService.getUserId(),
            payload
        );
        return data;
    }
};

export default userService;
