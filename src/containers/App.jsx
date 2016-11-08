import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
    render() {
        return (
            <div>
                <Link className="link" to="/">home</Link>
                <Link className="link" to="/todomvc">Todomvc</Link>
                <Link className="link" to="/lifecycle">Lifecycle</Link>
                {this.props.children}
            </div>
        )
    }
}
