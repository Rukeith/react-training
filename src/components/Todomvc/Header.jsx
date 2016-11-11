import React, { Component } from 'react'

export default class Header extends Component {
    constructor() {
        super()
        this.enterTodo = this.enterTodo.bind(this)
    }

    enterTodo(e) {
        const value = e.target.value.trim()
        if (e.keyCode === 13 && value !== '') {
            e.preventDefault()
            this.props.addTodo(value)
            e.target.value = ''
        }
    }

    render() {
        return (
            <header>
                <h1>todos</h1>
                <input onKeyUp={this.enterTodo} />
            </header>
        )
    }
}
