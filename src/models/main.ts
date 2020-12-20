import { Record } from "immutable";
import { loadStatus } from "src/store/loadStatus";

export interface IMain {
    statusAsync: { loadBlocks: loadStatus; loadRoles: loadStatus; loadQuestions: loadStatus };
}

const initialMain: IMain = {
    statusAsync: {
        loadBlocks: loadStatus.notLoaded,
        loadRoles: loadStatus.notLoaded,
        loadQuestions: loadStatus.notLoaded,
    },
};

export default class Main extends Record(initialMain) {}
