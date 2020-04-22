import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import MetaTags from 'react-meta-tags';
import './App.scss'

import View500 from './views/Others/500';
import Index from './views/Index/index';
import { Provider } from 'react-redux'
import { createStore } from 'redux';


const App = () => (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/500" component={View500} />
            </Switch>
        </Router>
    </div>
)

export default App
