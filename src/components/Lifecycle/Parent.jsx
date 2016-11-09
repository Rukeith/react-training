import React, { Component } from 'react'

export default class Parent extends Component {
    render() {
        const { children, updateChild, showChild, hideChild } = this.props
        return (
            <div>
                Parent
                <button onClick={updateChild}>update child</button>
                <button onClick={showChild}>show child</button>
                <button onClick={hideChild}>hide child</button>
                {children}
            </div>
        )
    }
}
