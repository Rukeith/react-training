import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../../constants/ActionTypes.js'

export default class Main extends Component {
    render() {
        const { todos, show } = this.props

        const showTodos = todos.filter(item => {
            switch (show) {
                case ACTIVE_TODOS:
                    return !item.completed
                case COMPLETED_TODOS:
                    return item.completed
                default:
                    return true
            }
        })

        const todoItems = showTodos.map(item => {
            return <TodoItem key={item.id} item={item} />
        })

        let showStatus
        switch (show) {
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
