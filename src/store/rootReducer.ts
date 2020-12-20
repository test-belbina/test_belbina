import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import main, { TStoreMain } from "src/store/main/reducer";
import blocks, { TStoreBlock } from "src/store/blocks/reducer";
import roles, { TStoreRole } from "src/store/roles/reducer";
import questions from "src/store/questions/reducer";

export interface IStore {
    router: typeof connectRouter;
    main: TStoreMain;
    blocks: TStoreBlock;
    roles: TStoreRole;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        main,
        blocks,
        roles,
        questions,
    });

export default createRootReducer;
