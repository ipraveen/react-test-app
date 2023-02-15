import React, { useRef } from 'react';
import MyInput from './MyInput';

function App(props) {
    const inputRef = useRef(null);

    return (
        <div>
            <MyInput ref={inputRef} />
            <br />
            <button onClick={() => inputRef.current.focus()}>Focus</button>
            <button onClick={() => inputRef.current.blur()}>Blur</button>
        </div>
    );
}

export default App;
