/*update function = A functinon passed as an argument to setState() usually
                    ex. setYear(arrow function)
                    Allow for safe update based on the previous state used with multiple state 
                    updateds and asynchromous functions Good practice to use update functions*/

import React, { useState } from 'react'

function Update() {

    const [count, setCount] = useState(0);

    function handleNumberChange() {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    return (
        <>
            <div>
                <p>{count}</p>
                <button onClick={handleNumberChange} className='counter-button'>Increase</button>
                <button onClick={() => setCount(0)} className='counter-button'>Reset</button>
                <button onClick={() => setCount(count - 1)} className='counter-button'>Decrease</button>
            </div>
        </>
    );
}

export default Update