import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Role from "src/models/role";

export type TStoreRole = Map<Role["id"], Role>;

const reducer = (state: TStoreRole = Map(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_ROLES_SUCCESS:
            action.roles.forEach((role: Role) => {
                if (!state.has(role.id)) {
                    state = state.set(role.id, role);
                }
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
