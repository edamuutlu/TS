import React from 'react';

type IProps = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: () => void;
};

export const ToDoForm: React.FC<IProps> = ({ todo, setTodo, addTodo }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todo) {
            addTodo();
            setTodo('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="ToDoForm">
                <input
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    type="text"
                    className="todo-input"
                    placeholder='What is the task today?'
                />
                <button type='submit' className='todo-btn'>Add Task</button>
            </form>
        </div>
    );
};
