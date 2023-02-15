import React, { useRef } from 'react';
import styles from './style.module.scss';

function ToDo({ todo, onChange }) {
    const renderCounter = useRef(0);
    renderCounter.current = renderCounter.current + 1;
    return (
        <section className={styles.todo}>
            <span className={styles.todoAction}>
                <input
                    type="checkbox"
                    id=""
                    checked={todo.completed}
                    onChange={(event) => {
                        onChange(todo.id, event.target.checked);
                    }}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}> {todo.value}</span>
            </span>
            <i>{renderCounter.current}</i>
        </section>
    );
}

export default ToDo;
