import React, { useState } from 'react';

function AddTodo({ addTodo }) {
    const [value, setValue] = useState('');

    const handleToDoAdd = (event) => {
        event.preventDefault();
        setValue('');
        addTodo({ id: window.crypto.randomUUID(), value, completed: false });
    };
    return (
        <form onSubmit={handleToDoAdd}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit"> Add </button>
        </form>
    );
}

export default AddTodo;
