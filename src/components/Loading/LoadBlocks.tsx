import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadBlocks } from "src/store/blocks/actions";

export default function LoadBlocks() {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadBlocks());
    }, [dispatch]);

    return <></>;
}
