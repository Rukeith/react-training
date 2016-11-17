import uuid from 'uuid'
import * as types from '../constants/ActionTypes'

const initialState = {
    list: [],
    show: types.ALL_TODOS
}

export default function todos(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return Object.assign({}, state, { list: [...state.list, {
                id: uuid.v1(),
                text: action.text,
                completed: false
            }] })

        case types.TOGGLE_TODO:
            return Object.assign({}, state, { list: list.map(item => {
                if (item.id === action.id) {
                    item.completed = !item.completed
                }
                return item
            }) })

        case types.DELETE_TODO:
            return Object.assign({}, state, { list: state.list.filter(item => item.id !== action.id) })

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
