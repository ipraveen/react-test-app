import { useReducer } from 'react';
import { counterReducer } from './reducer';

export default function App() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
        <div className="container">
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
}
