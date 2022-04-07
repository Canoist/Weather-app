import axios from "axios";
import { toast } from "react-toastify";
import configFile from "../config.json";

const httpGeo = axios.create({
    baseURL: configFile.apiEndPointGeo
});

function transformData(data) {
    const newData = data.map((item) => {
        if (item?.local_names?.ru) {
            return {
                ...item,
                label: item.local_names.ru
            };
        } else {
            return {
                ...item,
                label: item.name
            };
        }
    });
    return newData;
}

httpGeo.interceptors.response.use(
    (res) => {
        res.data = transformData(res.data);
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            console.log(error);
            toast.error("Something was wrong. Try it later");
        }
        return Promise.reject(error);
    }
);

const httpGeoService = {
    get: httpGeo.get
};

export default httpGeoService;
