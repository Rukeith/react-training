import uuid from 'uuid'
import * as types from '../constants/ActionTypes'


const initialState = {
    list: [],
    show: types.ALL_TODOS
}

export default function todos(state = initialState, action) {
    let { list } = state
    switch (action.type) {
        case types.ADD_TODO:
            const item = {
                id: uuid.v1(),
                text: action.text,
                completed: false
            }
            list.push(item)
            return Object.assign({}, state, { list })

        case types.TOGGLE_TODO:
            return Object.assign({}, state, { list: list.map(item => {
                if (item.id === action.id) {
                    item.completed = !item.completed
                }
                return item
            }) })

        case types.DELETE_TODO:
            list = state.list.filter(item => item.id !== action.id)
            return Object.assign({}, state, { list })

        case types.ALL_TODOS:
            return Object.assign({}, state, { show: types.ALL_TODOS })

        case types.ACTIVE_TODOS:
            return Object.assign({}, state, { show: types.ACTIVE_TODOS })

        case types.COMPLETED_TODOS:
            return Object.assign({}, state, { show: types.COMPLETED_TODOS })

        case types.CLEAR_TODOS:
            return Object.assign({}, state, { list: [] })

        default:
            return state
    }
}
