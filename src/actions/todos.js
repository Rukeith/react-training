import * as types from '../constants/ActionTypes'

export const addTodo = text => {
    return {
        type: types.ADD_TODO,
        text
    }
}

export const toggleStatus = id => {
    return {
        type: types.TOGGLE_TODO,
        id
    }
}

export const delTodo = id => {
    return {
        type: types.DELETE_TODO,
        id
    }
}

export const allTodos = () => {
    return {
        type: types.ALL_TODOS,
    }
}

export const activeTodos = () => {
    return {
        type: types.ACTIVE_TODOS,
    }
}

export const completeTodos = () => {
    return {
        type: types.COMPLETED_TODOS,
    }
}

export const clearTodos = () => {
    return {
        type: types.CLEAR_TODOS,
    }
}
