import { IHttp } from "src/services/IHttp";
import Role from "src/models/role";

export interface IReadApiRole {
    id: number;
    name: string;
    characteristic: string;
    functionality: string;
}

export default class ApiRole {
    constructor(private http: IHttp, private url: string = "/roles.json") {}

    loadRoles = () => {
        return this.http.get(this.url).then((response: IReadApiRole[]) => {
            return response.map((apiRole) => new Role(apiRole));
        });
    };
}
