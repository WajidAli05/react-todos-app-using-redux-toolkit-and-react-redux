import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, deleteTodo } from '../slices/todoSlice';

function TodoComponent() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);

    const handleComplete = id => {
        dispatch(completeTodo(id));
    };

    const handleDelete = id => {
        dispatch(deleteTodo(id));
    };

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id} className='todo flex justify-between'>
                    <p className='text-left'>{todo.text}</p>
                    <div style={{ width: '200px' }} className='flex justify-between'>
                        <button
                            onClick={() => handleComplete(todo.id)}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                        >
                            Complete
                        </button>
                        <button
                            onClick={() => handleDelete(todo.id)}
                            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoComponent;
