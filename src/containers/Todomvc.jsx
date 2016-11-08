import React, { Component } from 'react'
import uuid from 'uuid'
import { Header, Main, TodoItem, Footer } from '../components/Todomvc'

import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants/ActionTypes'

export default class Todomvc extends Component {
    constructor() {
        super()
        this.getTodo = this.getTodo.bind(this)
        this.delTodo = this.delTodo.bind(this)
        this.clearTodo = this.clearTodo.bind(this)
        this.toggleStatus = this.toggleStatus.bind(this)
        this.all = this.all.bind(this)
        this.active = this.active.bind(this)
        this.complete = this.complete.bind(this)
        this.state = {
            todos: [],
            show: ALL_TODOS
        }
    }

    getTodo(todo) {
        const todos = this.state.todos
        const id = uuid.v1()
        const item = {
            id,
            todo,
            completed: false,
            delTodo: this.delTodo,
            toggleStatus: this.toggleStatus
        }
        todos.push(item)
        this.setState({ todos })
    }

    delTodo(id) {
        const todos = this.state.todos
        this.setState({ todos: todos.filter(item => item.id !== id) })
    }

    clearTodo() {
        this.setState({ todos: [] })
    }

    toggleStatus(id) {
        const todos = this.state.todos
        this.setState({ todos: todos.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        }) })
    }

    all() {
        this.setState({ show: ALL_TODOS })
    }

    active() {
        this.setState({ show: ACTIVE_TODOS })
    }

    complete() {
        this.setState({ show: COMPLETED_TODOS })
    }

    render() {
        return (
            <div>
                <Header getTodo={this.getTodo} />
                <Main todos={this.state.todos} show={this.state.show} />
                <Footer clearTodo={this.clearTodo} all={this.all} active={this.active} complete={this.complete} />
            </div>
        )
    }
}
