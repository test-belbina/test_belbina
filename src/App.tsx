import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import TestPage from "src/components/TestPage/TestPage";
import ResultPage from "src/components/ResultPage/ResultPage";

function App() {
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
                    <Wrapper>
                        <ResultPage {...props} />
                    </Wrapper>
                }/>
            </Switch>
    );
}

const Wrapper = styled.div`
    margin-bottom: 3em;
    @media (max-width: 768px) {
        margin-bottom: 7em;
    }
`;

const BorderWrapper = styled.div`
    max-width: 935px;
    margin: 0 auto 3em auto;
    @media (max-width: 768px) {
        margin-bottom: 7em;
    } 
`;

export default App;
