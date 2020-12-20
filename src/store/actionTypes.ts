import * as blockActions from "src/store/blocks/actions";
import * as roleActions from "src/store/roles/actions";
import * as questionActions from "src/store/questions/actions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypesInfer<T extends { [key: string]: any }> = ReturnType<InferValueTypes<T>>;

export type allActionsTypes = ActionTypesInfer<typeof blockActions | typeof roleActions | typeof questionActions>;
