let nextTodoId = 0

export const addTodo = text => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text
})

export const setVisibilityFiler = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}