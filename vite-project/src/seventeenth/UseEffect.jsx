import React, { useState, useEffect } from 'react'

function UseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // Even witout useEffect this will work
    useEffect(() => {
        document.title = `Count: ${count} ${color}`
        // return () => { 
        //     //For some cleanup code
        // }
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        if (count > 0) {
            setCount(c => c - 1);
        }
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <>
            <h1 style={{ color: color }}>Color Render</h1>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change color</button>
        </>
    );
}

export default UseEffect