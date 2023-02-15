import { useCallback, useState } from 'react';
import CounterClick from './CounterClick';
import CounterDisplay from './CounterDisplay';

export default function App() {
    const [count, setCount] = useState(0);
    // const handleIncrement = useCallback(() => {
    //     setCount((c) => c + 1);
    // }, [setCount]);

    // Below will trigger render.
    const handleIncrement = () => setCount((c) => c + 1);

    return (
        <div className="container">
            <CounterDisplay count={count} />
            <CounterClick increment={handleIncrement} />
        </div>
    );
}
