/*React hook = A special function that allows functional components to use React
              features without writing class components (React v16.8) 
              (useState, useEffect, useContext, useReducer, useCallback and more...)*/

/*useState() = A React hook that allows the creation of a stateful variable AND
                a setter function to update its value in the virtual DOM [name, setName]*/

import React, { useState } from 'react';

function MyComponent() {

    // const [name, setName] = useState("Guest");

    // const updateName = () => {
    //     setName("Spongebob");
    // }

    const [count, setCount] = useState(0);

    return (
        <>
            <div className='counter-container'>
                {/* <p>Name: {name}</p> */}
                {/* <button onClick={updateName}>Set the Name</button> */}
                {/* <br/> */}
                <p className='count-display'>{count}</p>
                <button onClick={() => setCount(count + 1)} className='counter-button'>Increase</button>
                <button onClick={() => setCount(0)} className='counter-button'>Reset</button>
                <button onClick={() => setCount(count - 1)} className='counter-button'>Decrease</button>
            </div>
        </>
    );
}

export default MyComponent