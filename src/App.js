import React, {lazy, Suspense} from 'react';
import Spinner from "./Components/Spinner";
import {BrowserRouter, Route, Switch} from "react-router-dom";


const HomePage = lazy(() => import("./Pages/HomePage"));

const App = () => (
    <BrowserRouter>
        <Switch>
            <Suspense fallback={<Spinner/>}>
                <Route exact path="/" component={HomePage}/>
            </Suspense>
        </Switch>
    </BrowserRouter>
);

export default App;
