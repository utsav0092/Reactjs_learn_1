/*useEffect() = react hook that tells react to do some code when
                (pick one) This comment re-renders This component mounts
                the state of value

useEffect(function, [dependencies]) 

1. useEffect(() => {})    //Runs after every re-renders
2. useEffect(() => {})    //Runs only on mount
3. useEffect(() => {})    //Runs on mount + when value changes
 
Uses :-
1. Event literners
2. DOM Menipulation
3. Subscription {real-time updates}
4. Fetching Data from an API
5. Clean up when a component unmount
*/

import React, { useState, useEffect } from 'react'

function WidthHei() {

    const [width, setWidth] = useState(window.innerWidth);
    const [Height, setHeight] = useState(window.innerHeight);

    useEffect(() => {

        window.addEventListener("resize", handleResize)
        console.log("Event listener added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log('Event listener removed');
        }

    }, []);

    useEffect(() => { document.title = `Size: ${width} x ${Height}` }, []);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {Height}px</p>
        </>
    );
}

export default WidthHei