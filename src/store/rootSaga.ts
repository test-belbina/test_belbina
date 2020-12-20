import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import blockSaga from "src/store/blocks/saga";
import roleSaga from "src/store/roles/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([blockSaga(services), roleSaga(services)]);
    };
};
