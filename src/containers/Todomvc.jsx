import React, { Component } from 'react'
import uuid from 'uuid'

import { Header, Main, TodoItem, Footer } from '../components/Todomvc'
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants/ActionTypes'

export default class Todomvc extends Component {
    constructor() {
        super()
        this.addTodo = this.addTodo.bind(this)
        this.toggleStatus = this.toggleStatus.bind(this)
        this.delTodo = this.delTodo.bind(this)
        this.allTodos = this.allTodos.bind(this)
        this.activeTodos = this.activeTodos.bind(this)
        this.completeTodos = this.completeTodos.bind(this)
        this.clearTodos = this.clearTodos.bind(this)
        this.state = {
            list: [],
            show: ALL_TODOS
        }
    }

    addTodo(text) {
        const { list } = this.state
        const id = uuid.v1()
        const item = {
            id,
            text,
            completed: false
        }
        list.push(item)
        this.setState({ list })
    }

    toggleStatus(id) {
        const { list } = this.state
        this.setState({ list: list.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        }) })
    }

    delTodo(id) {
        const { list } = this.state
        this.setState({ list: list.filter(item => item.id !== id) })
    }

    allTodos() {
        this.setState({ show: ALL_TODOS })
    }

    activeTodos() {
        this.setState({ show: ACTIVE_TODOS })
    }

    completeTodos() {
        this.setState({ show: COMPLETED_TODOS })
    }

    clearTodos() {
        this.setState({ list: [] })
    }

    render() {
        const mainFuncs = {
            delTodo: this.delTodo,
            toggleStatus: this.toggleStatus
        }
        const footerFuncs = {
            allTodos: this.allTodos,
            activeTodos: this.activeTodos,
            completeTodos: this.completeTodos,
            clearTodos: this.clearTodos
        }

        const todos = {
            show: this.state.show,
            list: this.state.list
        }

        return (
            <div>
                <Header addTodo={this.addTodo} />
                <Main todos={todos} mainFuncs={mainFuncs} />
                <Footer footerFuncs={footerFuncs} />
            </div>
        )
    }
}
