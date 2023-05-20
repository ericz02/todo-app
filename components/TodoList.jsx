"use client"

import { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [showLists, setShowLists] = useState(false);

    const handleInputChange = (e) => {
    setNewTodo(e.target.value);
    };

    const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }
    };

    const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    };

    const handleToggleLists = () => {
    setShowLists(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
            <div className="flex mb-4">
            <input
                type="text"
                value={newTodo}
                onChange={handleInputChange}
                placeholder="Enter a new task"
                className="rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleAddTodo}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
            >
                Add
            </button>
            </div>
            {todos.length > 0 && !showLists && (
            <ul>
                {todos.map((todo, index) => (
                <li
                    key={index}
                    className="flex items-center mb-2 bg-gray-100 rounded p-4"
                >
                    <span className="flex-grow">{todo}</span>
                    <button
                    onClick={() => handleRemoveTodo(index)}
                    className="text-red-500 hover:text-red-600 focus:outline-none"
                    >
                    X
                    </button>
                </li>
                ))}
            </ul>
            )}
            {!showLists && (
            <div className="flex justify-center">
                <button
                onClick={handleToggleLists}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                View Lists
                </button>
            </div>
            )}
            {showLists && (
            <div>
                <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
                <ul>
                {todos.map((todo, index) => (
                    <li key={index} className="mb-2">
                    {todo}
                    </li>
                ))}
                </ul>
            </div>
            )}
        </div>
    );
};

export default TodoList;