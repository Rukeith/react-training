import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const { footerFuncs } = this.props
        return (
            <footer className="footer">
                <button onClick={footerFuncs.allTodos}>All</button>
                <button onClick={footerFuncs.activeTodos}>Active</button>
                <button onClick={footerFuncs.completeTodos}>Complete</button>
                <button onClick={footerFuncs.clearTodos}>clear all</button>
            </footer>
        )
    }
}
