import React, { useImperativeHandle, useRef } from 'react';

const MyInput = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        blur: () => {
            inputRef.current.blur();
        },
    }));
    return <input ref={inputRef} />;
});

export default MyInput;
