import React, { useContext } from 'react'
import { UserContext } from './ComponentA';
import ComponentC from './ComponentC.jsx';

function ComponentB() {

    const user = useContext(UserContext);

    return (
        <>
            <div className='box'>
                <h1>ComponentB</h1>
                <h2>{`hello again ${user}`}</h2>
                <ComponentC />
            </div>
        </>
    );
}

export default ComponentB