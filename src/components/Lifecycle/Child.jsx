import React, { Component } from 'react'

export default class Child extends Component {
    constructor() {
        super()
        this.updateSelf = this.updateSelf.bind(this)
        this.state = {
            selfStatus: 'child-0'
        }
        console.log('constructor')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
        console.log('this.props:', this.props, 'nextProps:', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log('this.props:', this.props, 'nextProps:', nextProps)
        console.log('this.state:', this.state, 'nextState:', nextState)
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
        console.log('this.props:', this.props, 'nextProps:', nextProps)
        console.log('this.state:', this.state, 'nextState:', nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        console.log('prevProps:', prevProps, 'this.props:', this.props)
        console.log('prevState:', prevState, 'this.state:', this.state)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    updateSelf() {
        const { selfStatus } = this.state
        const update = selfStatus.split('-')
        update[1] = parseInt(update[1]) + 1
        this.setState({ selfStatus: update.join('-') })
    }

    render() {
        return (
            <div>
                Child
                <button onClick={this.updateSelf}>update self</button>
                <p>child status: {this.props.childStatus}</p>
                <p>self status: {this.state.selfStatus}</p>
            </div>
        )
    }
}
