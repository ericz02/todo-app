"use client"

import { useState } from "react";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can handle the form submission, e.g., send data to an API

    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    };

    return (
    <div className="flex justify-center items-center h-[610px]">
        <form className="w-1/3 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
            </label>
            <input
            className="w-full px-3 py-2 border border-gray-400 rounded"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
            </label>
            <input
            className="w-full px-3 py-2 border border-gray-400 rounded"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
            </label>
            <input
            className="w-full px-3 py-2 border border-gray-400 rounded"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={handleSubmit}
        >
            Create Account
        </button>
        </form>
    </div>
  );
};

export default Register
