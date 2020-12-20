import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loadRolesSuccess } from "./actions";
import { setStatusAsync } from "src/store/main/actions";
import { loadStatus } from "src/store/loadStatus";

function* loadRolesAsync(services: typeof bottle) {
    try {
        const roles = yield call(services.container.ApiRole.loadRoles);
        yield put(loadRolesSuccess(roles));
        yield put(setStatusAsync("loadRoles", loadStatus.loaded));
    } catch (e) {
        yield put(setStatusAsync("loadRoles", loadStatus.errorServer));
        console.error("Server error while loading roles!");
        console.error(e);
    }
}

export default function* roleSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_ROLES, loadRolesAsync, services);
}
