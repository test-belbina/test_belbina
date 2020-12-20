import { createSelector } from "reselect";
import { Map } from "immutable";
import { IStore } from "src/store/rootReducer";
import { getStatusAsync } from "src/store/main/selectors";
import Role, { sortValue } from "src/models/role";
import { TStoreRole } from "./roles/reducer";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const mainState = (state: Readonly<IStore>) => state.main;
export const mainGetStatusAsync = createSelector(mainState, getStatusAsync);

export const blockState = (state: Readonly<IStore>) => state.blocks;
export const blockGetBlockById = createSelector(blockState, propsFirstSelector, (blocks, id) => {
    return blocks.filter((block) => block.id === id);
});

export const roleState = (state: any) => state.roles;
export const rolesGetRoleCalculatedValue = (state: any): TStoreRole => {
    let result: TStoreRole = Map<Role["id"], Role>();
    state.roles.forEach((role: any) => {
        let sumValue = state.questions
            .filter((question: any) => question.role === role.id)
            .reduce((sum: any, question: any) => sum + question.value, 0);

        result = result.set(role.id, role.set("value", sumValue));
    });

    return result;
};
export const rolesGetRoleCalculatedValueSort = createSelector(rolesGetRoleCalculatedValue, sortValue);

export const questionState = (state: any) => state.questions;
export const questionsGetQuestionByBlock = createSelector(questionState, propsFirstSelector, (questions, id) => {
    return questions.filter((question: any) => question.block === id);
});
