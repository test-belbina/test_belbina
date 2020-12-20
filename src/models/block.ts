import { Record } from "immutable";

export interface IBlock {
    id: number;
    title: string;
}

export const initialBlock: IBlock = {
    id: 0,
    title: "",
};

export default class Block extends Record(initialBlock) {}
