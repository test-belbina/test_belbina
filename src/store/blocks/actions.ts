import * as types from "./types";
import Block from "src/models/block";

export const loadBlocks = () =>
    ({
        type: types.LOAD_BLOCKS,
    } as const);

export const loadBlocksSuccess = (blocks: Block[]) =>
    ({
        type: types.LOAD_BLOCKS_SUCCESS,
        blocks,
    } as const);
