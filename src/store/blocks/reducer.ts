import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Block from "src/models/block";

export type TStoreBlock = Map<Block["id"], Block>;

const reducer = (state: TStoreBlock = Map(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_BLOCKS_SUCCESS:
            action.blocks.forEach((block: Block) => {
                if (!state.has(block.id)) {
                    state = state.set(block.id, block);
                }
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
