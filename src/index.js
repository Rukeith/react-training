import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './containers/App'
import Todomvc from './containers/Todomvc'
import Lifecycle from './containers/Lifecycle'
import ReduxTodomvc from './containers/ReduxTodomvc'
import configureStore from './store/configureStore'

import './style/main.css'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="todomvc" component={Todomvc} />
                <Route path="lifecycle" component={Lifecycle} />
                <Route path="reduxtodomvc" component={ReduxTodomvc} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
