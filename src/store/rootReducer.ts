import { combineReducers } from "redux";
import main, { TStoreMain } from "src/store/main/reducer";
import blocks, { TStoreBlock } from "src/store/blocks/reducer";
import roles, { TStoreRole } from "src/store/roles/reducer";
import questions from "src/store/questions/reducer";

export interface IStore {
    main: TStoreMain;
    blocks: TStoreBlock;
    roles: TStoreRole;
}

const createRootReducer = () =>
    combineReducers({
        main,
        blocks,
        roles,
        questions,
    });

export default createRootReducer;
