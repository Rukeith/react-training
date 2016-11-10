import React, { Component } from 'react'
import { Parent, Child } from '../components/Lifecycle'

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
        const update = this.state.childStatus.split('-')
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
            <Parent updateChild={this.updateChild} showChild={this.showChild} hideChild={this.hideChild}>
                {this.state.childStatus === 'hide' ? null : <Child childStatus={this.state.childStatus} />}
            </Parent>
        )
    }
}
