import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import TestPage from "src/components/TestPage/TestPage";
import ResultPage from "src/components/ResultPage/ResultPage";

function App(props: any) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
            <Switch>
                <Route exact path="/">
                    <Redirect to="/block/1" />
                </Route>
                <Route exact path="/block/:idBlock" render={(props: any) => 
                    <BorderWrapper>
                        <TestPage {...props} />
                    </BorderWrapper>
                }/>
                <Route exact path="/test_result" render={(props: any) => 
                    <ResultPage {...props} />
                }/>
                <Route exact path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
    );
}

const BorderWrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;

export default App;
