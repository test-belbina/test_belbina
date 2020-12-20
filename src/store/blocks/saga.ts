import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loadBlocksSuccess } from "./actions";
import { setStatusAsync } from "src/store/main/actions";
import { loadStatus } from "src/store/loadStatus";

function* loadBlocksAsync(services: typeof bottle) {
    try {
        const blocks = yield call(services.container.ApiBlock.loadBlocks);
        yield put(loadBlocksSuccess(blocks));
        yield put(setStatusAsync("loadBlocks", loadStatus.loaded));
    } catch (e) {
        yield put(setStatusAsync("loadBlocks", loadStatus.errorServer));
        console.error("Server error while loading blocks!");
        console.error(e);
    }
}

export default function* blockSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_BLOCKS, loadBlocksAsync, services);
}
