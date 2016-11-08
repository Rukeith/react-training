import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const { all, active, complete, clearTodo } = this.props
        return (
            <footer className="footer">
                <button onClick={all}>All</button>
                <button onClick={active}>Active</button>
                <button onClick={complete}>Complete</button>
                <button onClick={clearTodo}>clear all</button>
            </footer>
        )
    }
}
