import { IHttp } from "src/services/IHttp";
import Block from "src/models/block";

export interface IReadApiBlock {
    id: number;
    title: string;
}

export default class ApiBlock {
    constructor(private http: IHttp, private url: string = "/blocks.json") {}

    loadBlocks = () => {
        return this.http.get(this.url).then((response: IReadApiBlock[]) => {
            return response.map((apiBlock) => new Block(apiBlock));
        });
    };
}
