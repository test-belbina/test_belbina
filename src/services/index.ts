import Bottle from "bottlejs";
import Http from "./http";
import ApiBlock from "./api/apiBlock";
import ApiRole from "./api/apiRole";
import ApiQuestion from "./api/apiQuestion";
import ApiForm from "./api/apiForm";

let bottle = new Bottle();

export default bottle;
bottle.service("Http", Http);
bottle.service("ApiBlock", ApiBlock, "Http");
bottle.service("ApiRole", ApiRole, "Http");
bottle.service("ApiQuestion", ApiQuestion, "Http");
bottle.service("ApiForm", ApiForm, "Http")

declare module "bottlejs" {
    interface IContainer {
        ApiBlock: ApiBlock;
        ApiRole: ApiRole;
        ApiQuestion: ApiQuestion;
        ApiForm: ApiForm;
    }
}
