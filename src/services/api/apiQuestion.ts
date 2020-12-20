import { IHttp } from "src/services/IHttp";
import Question from "src/models/question";

export interface IReadApiQuestion {
    id: number;
    block: number;
    role: number;
    text: string;
}

export default class ApiQuestion {
    constructor(private http: IHttp, private url: string = "/questions.json") {}

    loadQuestions = () => {
        return this.http.get(this.url).then((response: IReadApiQuestion[]) => {
            return response.map((apiQuestion) => new Question(apiQuestion));
        });
    };
}
