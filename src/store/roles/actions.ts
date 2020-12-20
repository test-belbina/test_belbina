import * as types from "./types";
import Role from "src/models/role";

export const loadRoles = () =>
    ({
        type: types.LOAD_ROLES,
    } as const);

export const loadRolesSuccess = (roles: Role[]) =>
    ({
        type: types.LOAD_ROLES_SUCCESS,
        roles,
    } as const);
