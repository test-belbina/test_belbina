import * as types from "./types";

export const setValue = (id: number, questionPart: number, value: number) =>
    ({
        type: types.SET_VALUE,
        id,
        questionPart,
        value,
    } as const);

export const resetQuestions = () => ({
    type: types.RESET_QUESTIONS
} as const);
