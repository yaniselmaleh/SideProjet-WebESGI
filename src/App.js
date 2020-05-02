import React, {lazy, Suspense} from 'react';
import Spinner from "./Components/Spinner";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";

const HomePage = lazy(() => import("./Pages/HomePage"));

const App = () => (
    <BrowserRouter>
        <Switch>
            <ErrorBoundary>
                <Suspense fallback={<Spinner/>}>
                    <Route exact path="/" component={HomePage}/>
                </Suspense>
            </ErrorBoundary>
        </Switch>
    </BrowserRouter>
);

export default App;
