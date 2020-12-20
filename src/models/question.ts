import { Record } from "immutable";

export interface IQuestion {
    id: number;
    block: number;
    role: number;
    text: string;
    value: number;
}

export const initialQuestion: IQuestion = {
    id: 0,
    block: 0,
    role: 0,
    text: "",
    value: 0,
};

export default class Question extends Record(initialQuestion) {}
