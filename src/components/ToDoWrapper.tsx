import React, { useState } from 'react';
import { todoList } from '../types/Type';
import { v4 as uuidv4 } from "uuid";
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { ToDoForm } from './ToDoForm';

const ToDoWrapper = () => {
    const [todo, setTodo] = useState<string>('');
    const [todoList, setTodoList] = useState<todoList[]>([]);

    const addTodo = () => {
        if (todo) {
            setTodoList([...todoList, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
            setTodo('');
        }
    };

    const deleteTodo = (id: string) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id: string) => {
        setTodoList(
            todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        );
    };

    const editTodo = (id: string) => {
        setTodoList(
            todoList.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
        );
    };

    const editTask = (task: string, id: string) => {
        setTodoList(
            todoList.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)
        );
    };

    console.log({ todoList });

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <ToDoForm todo={todo} setTodo={setTodo} addTodo={addTodo} /> {/* Pass props correctly here */}
            {/* Display todos */}
            {todoList.map(todo =>
                todo.isEditing ? (
                    <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    );
};

export default ToDoWrapper;
