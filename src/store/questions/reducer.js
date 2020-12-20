import { questions } from '../../text/questions';
import * as types from "./types";

const initialState = {
    ...questions.map((el) => el.questions.map(_ => 0))
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_VALUE: 
            const questionPart = action.questionPart;
            const id = action.id;
            const newState = {
                ...state
            };
            newState[questionPart][id] = action.value
            return newState;
        case types.RESET_QUESTIONS:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
