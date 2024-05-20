/*Similer to useState() but does not re-renders again and again.

useRef() = 'use reference' does not cause re-render when its value changes
            When you want a coponent to 'rember' some informatio but you don't want 
            that informatio to trigger information to tirgger new renders

1. Accessing/Interacting with DOM elements
2. Handling focus, animations, and transaction
3. managing timers and intervals
*/

import React, { useState, useEffect, useRef } from 'react';

function UseRef() {

    //useRef() returns object
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("component render");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'yellow';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }
    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = 'yellow';
        inputRef1.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }
    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = 'yellow';
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
    }

    return (
        <>
            <div>
                <button onClick={handleClick1}>Click1</button>
                <input ref={inputRef1} /><br />
                <button onClick={handleClick2}>Click2</button>
                <input ref={inputRef2} /><br />
                <button onClick={handleClick3}>Click3</button>
                <input ref={inputRef3} /><br />
            </div>
        </>
    );
}

export default UseRef