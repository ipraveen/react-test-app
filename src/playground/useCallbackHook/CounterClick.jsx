import React, { useRef } from 'react';
// import { useRenderCount } from './useRenderCount';

const CounterClick = React.memo(({ increment }) => {
    const renders = useRef({ count: 0 });
    renders.current.count += 1;

    console.log(`Renders count: ${renders.current.count}`);
    return <button onClick={increment}>Click</button>;
});

export default CounterClick;
