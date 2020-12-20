import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadRoles } from "src/store/roles/actions";

export default function LoadRoles() {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadRoles());
    }, [dispatch]);

    return <></>;
}
