import React, { useCallback, useState } from 'react';
import AddTodo from './AddTodo';
import ToDo from './ToDo';

const ToDoMemo = React.memo(ToDo);

function App(props) {
    const [todos, setTodo] = useState([]);

    const handleTodoChange = useCallback((id, completed) => {
        setTodo((_todos) => {
            return _todos.map((_todo) => {
                if (_todo.id === id) {
                    return { ..._todo, completed };
                }
                return _todo;
            });
        });
    }, []);

    return (
        <div className="container">
            <AddTodo addTodo={(newTodo) => setTodo((_todos) => [..._todos, newTodo])} />
            {todos.map((todo) => (
                <ToDoMemo key={todo.id} todo={todo} onChange={handleTodoChange} />
            ))}
        </div>
    );
}

export default App;
