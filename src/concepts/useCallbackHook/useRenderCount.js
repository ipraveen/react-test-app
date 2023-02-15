import { useDebugValue, useRef } from 'react';

export const useRenderCount = () => {
    const renders = useRef({ count: 0 });
    renders.current.count += 1;
    useDebugValue(`useRenderCount: count: ${renders.current.count}`);
    console.log(`Renders count: ${renders.current.count}`);
};
