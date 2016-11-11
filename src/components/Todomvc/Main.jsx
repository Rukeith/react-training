import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { ACTIVE_TODOS, COMPLETED_TODOS } from '../../constants/ActionTypes'

export default class Main extends Component {
    render() {
        const { todos, mainFuncs } = this.props

        const showTodos = todos.list.filter(item => {
            switch (todos.show) {
                case ACTIVE_TODOS:
                    return !item.completed
                case COMPLETED_TODOS:
                    return item.completed
                default:
                    return true
            }
        })

        const todoItems = showTodos.map(item => {
            return <TodoItem key={item.id} item={item} mainFuncs={mainFuncs} />
        })

        let showStatus
        switch (todos.show) {
            case ACTIVE_TODOS:
                showStatus = 'Active'
                break
            case COMPLETED_TODOS:
                showStatus = 'Complete'
                break
            default:
                showStatus = 'All'
        }
        
        return (
            <div>
                {showStatus}
                <ul>
                    {todoItems}
                </ul>
            </div>
        )
    }
}
