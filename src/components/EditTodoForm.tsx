import React, { useState } from 'react';
import { todoList } from '../types/Type';

type IProps = {
    editTodo: (task: string, id: string) => void;
    task: any;
};

export const EditTodoForm: React.FC<IProps> = ({ editTodo, task }) => {
    const [newTask, setNewTask] = useState(task.task);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        editTodo(newTask, task.id);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                type='text'
            />
            <button type='submit'>Update</button>
        </form>
    );
};
