import React, { Component } from 'react'
import { Child } from '../components/Lifecycle'

export default class Lifecycle extends Component {
    constructor() {
        super()
        this.updateChild = this.updateChild.bind(this)
        this.showChild = this.showChild.bind(this)
        this.hideChild = this.hideChild.bind(this)
        this.state = {
            childStatus: 'parent-0'
        }
    }

    updateChild() {
        const { childStatus } = this.state
        const update = childStatus.split('-')
        update[1] = parseInt(update[1]) + 1
        this.setState({ childStatus: update.join('-') })
    }

    showChild() {
        this.setState({ childStatus: 'parent-0' })
    }

    hideChild() {
        this.setState({ childStatus: 'hide' })
    }

    render() {
        return (
            <div>
                Parent
                <button onClick={this.updateChild}>update child</button>
                <button onClick={this.showChild}>show child</button>
                <button onClick={this.hideChild}>hide child</button>
                {this.state.childStatus === 'hide' ? null : <Child childStatus={this.state.childStatus} />}
            </div>
        )
    }
}
