import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { allActionsTypes } from "src/store/actionTypes";

export default function useCustomDispatch() {
    return useDispatch<Dispatch<allActionsTypes>>();
}
