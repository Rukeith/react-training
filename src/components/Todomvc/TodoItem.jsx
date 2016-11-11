import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { item, mainFuncs } = this.props
        return (
            <li>
                <input type="checkbox" onChange={mainFuncs.toggleStatus.bind(null, item.id)} checked={item.completed} />
                <span>{item.text}</span>
                <button className="del-todo-btn" onClick={mainFuncs.delTodo.bind(null, item.id)}>X</button>
            </li>
        )
    }
}
