import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './containers/App'
import Todomvc from './containers/Todomvc'

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="todomvc" component={Todomvc} />
        </Route>
    </Router>,
    document.getElementById('root')
)
