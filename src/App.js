import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import MetaTags from 'react-meta-tags';
import './App.scss'

import View500 from './views/Others/500';
import Index from './views/Index/index';


const App = () => (
    <div>
        <MetaTags>
            <title>PH VISA</title>
            <meta name="description" content="Some description." />
            <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
          </MetaTags>
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/500" component={View500} />
            </Switch>
        </Router>
    </div>
)

export default App
