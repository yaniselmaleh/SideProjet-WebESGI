import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Test from '../Components/Test';
import ReactTest from '../Components/ReactTest'

class Rooter extends Component {
    render(){
        
        const Root = () => (
            <Switch>
                <Route exact path="/test" component={Test} />
                <Route exact path="/" component={ReactTest} />
            </Switch>
        )

        return(
            <Router>
                <Root/>
            </Router>
        )
    }
}

export default Rooter