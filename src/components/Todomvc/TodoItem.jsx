import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { item } = this.props
        return (
            <li>
                <input type="checkbox" onChange={item.toggleStatus.bind(null, item.id)} checked={item.completed} />
                <span>{item.todo}</span>
                <button style={{marginLeft: '20px'}} onClick={item.delTodo.bind(null, item.id)}>X</button>
            </li>
        )
    }
}
