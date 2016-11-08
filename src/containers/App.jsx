import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
    render() {
        return (
            <div>
                <Link to="/">home</Link>
                <Link to="/todomvc">Todomvc</Link>
                <Link to="/lifecycle">Lifecycle</Link>
                {this.props.children}
            </div>
        )
    }
}
