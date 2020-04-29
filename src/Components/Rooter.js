import React, {Component, lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Spinner from "./Spinner";

const HomePage = lazy(() => import("../Pages/HomePageClass"));
const CountryPage = lazy(() => import("../Pages/CountryPage"));

class Rooter extends Component {
    render() {

        const Root = () => (
            <Switch>
                <Suspense fallback={<Spinner/>}>
                    <Route exact path="/country" component={CountryPage}/>
                    <Route exact path="/" component={HomePage}/>
                </Suspense>
            </Switch>
        )

        return (
            <Router>
                <Root/>
            </Router>
        )
    }
}

export default Rooter