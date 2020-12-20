import { Record } from "immutable";
import { TStoreRole } from "src/store/roles/reducer";

export interface IRole {
    id: number;
    name: string;
    characteristic: string;
    functionality: string;
    value: number;
}

export const initialRole: IRole = {
    id: 0,
    name: "",
    characteristic: "",
    functionality: "",
    value: 0,
};

export const sortValue = (roles: Readonly<TStoreRole>) => {
    return roles.sort((a: Role, b: Role) => {
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
        return 0;
    });
};

export default class Role extends Record(initialRole) {}
