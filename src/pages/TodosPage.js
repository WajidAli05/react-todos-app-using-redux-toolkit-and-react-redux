import React from 'react'
import TodoComponent from '../components/TodoComponent'
import AddTodo from '../components/AddTodo'

function TodosPage() {
    return (
        <div>
            <AddTodo />
            <TodoComponent />
        </div>
    )
}

export default TodosPage
