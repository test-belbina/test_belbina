import * as types from "./types";
import Main from "src/models/main";
import { loadStatus } from "src/store/loadStatus";

export const setStatusAsync = (status: keyof Main["statusAsync"], value: loadStatus) =>
    ({
        type: types.SET_STATUS_ASYNC,
        status,
        value,
    } as const);
