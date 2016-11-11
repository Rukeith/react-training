import React, { Component } from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'

import { Header, Main, TodoItem, Footer } from '../components/Todomvc/'
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants/ActionTypes'
import { addTodo, toggleStatus, delTodo, allTodos, activeTodos, completeTodos, clearTodos } from '../actions/todos'

class ReduxTodomvc extends Component {
    render() {
        const mainFuncs = {
            toggleStatus: this.props.toggleStatus,
            delTodo: this.props.delTodo
        }
        const footerFuncs = {
            allTodos: this.props.allTodos,
            activeTodos: this.props.activeTodos,
            completeTodos: this.props.completeTodos,
            clearTodos: this.props.clearTodos
        }

        return (
            <div>
                <Header addTodo={this.props.addTodo} />
                <Main todos={this.props.todos} mainFuncs={mainFuncs} />
                <Footer footerFuncs={footerFuncs} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = {
    addTodo,
    toggleStatus,
    delTodo,
    allTodos,
    activeTodos,
    completeTodos,
    clearTodos
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxTodomvc)
