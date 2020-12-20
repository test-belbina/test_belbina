import React from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { blockState, mainGetStatusAsync, questionState, roleState } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import LoadBlocks from "src/components/Loading/LoadBlocks";
import LoadRoles from "src/components/Loading/LoadRoles";
import Alert from "src/components/Alert/Alert";

export default function TechnicalCheckPage() {
    const blocks = useCustomSelector(blockState);
    const roles = useCustomSelector(roleState);
    const questions = useCustomSelector(questionState);
    const statusAsync = useCustomSelector(mainGetStatusAsync);

    if (statusAsync.loadBlocks === loadStatus.notLoaded) {
        return <LoadBlocks />;
    }

    if (statusAsync.loadRoles === loadStatus.notLoaded) {
        return <LoadRoles />;
    }

    if (
        statusAsync.loadBlocks === loadStatus.load ||
        statusAsync.loadRoles === loadStatus.load
    ) {
        return <Alert type="preload" text="Загрузка" />;
    }

    if (blocks.size > 0 && roles.size > 0 && questions.size > 0) {
        return (
            <div>
                <Title>Техническая проверка</Title>
                <TableStyled>
                    <thead>
                        <tr>
                            <td> </td>
                            {roles.valueSeq().map((role: any) => (
                                <td key={"headRole" + role.id}>{role.name}</td>
                            ))}
                        </tr>
                    </thead>
                </TableStyled>
            </div>
        );
    }

    return <Alert type="warning" text="Не предвиденная ошибка" />;
}

const TableStyled = styled.table`
    border: 1px solid #ccc;
    & td {
        border: 1px solid #ccc;
        padding: 5px;
        text-align: right;
    }
`;

const Title = styled.div`
    font-size: 2em;
    margin: 1em 0;
`;
