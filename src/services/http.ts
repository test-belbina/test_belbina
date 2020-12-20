import { IHttp } from "./IHttp";
import * as packageJson from "../../package.json";

export default class Http implements IHttp {
    get = (url: string, data?: object) => {
        return this.request("GET", url, data);
    };

    post = (url: string, data?: object) => {
        return this.request("POST", url, data);
    };

    put = (url: string, data?: object) => {
        return this.request("PUT", url, data);
    };

    patch = (url: string, data?: object) => {
        return this.request("PATCH", url, data);
    };

    delete = (url: string, data?: object) => {
        return this.request("DELETE", url, data);
    };

    request = (method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET", url: string, data?: {}) => {
        return fetch(packageJson.homepage + "/api" + url, {
            method,
            body: method !== "GET" ? JSON.stringify(data) : undefined,
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw response;
            }
        });
    };
}
