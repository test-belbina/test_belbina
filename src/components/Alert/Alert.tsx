import React from "react";
import styled from "styled-components";
import { Warning as WarningIcon } from "@styled-icons/entypo/Warning";
import { Loader5 as LoaderIcon } from "@styled-icons/remix-fill/Loader5";

interface IAlertProps {
    type: "preload" | "warning";
    text: string;
}

export default function Alert(props: IAlertProps) {
    return (
        <Wrapper>
            {props.type === "preload" && (
                <>
                    <LoaderStyledIcon size="28" /> {props.text}
                </>
            )}
            {props.type === "warning" && (
                <>
                    <WarningStyledIcon size="28" /> {props.text}
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50% 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #4a4a4a;
`;

const LoaderStyledIcon = styled(LoaderIcon)`
    animation: rotate 2s linear infinite;
    color: #2196f3;

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;

const WarningStyledIcon = styled(WarningIcon)`
    color: #ff0000;
`;
