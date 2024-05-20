/*useContext = React hook that allows you to share values between 
               multiple levels of components wihtout passing 
               props throuh each level
 
PROVIDE COMPONENT:
1. import {createContext} from 'react';
2. export const MyContext = createContext();
3. <MyContext.Provider value={value}>
   <Child/>
   <MyContext.Provider/>

CONSUMER COMPONENTS
1. import React, { useContext } from 'react';
   import { MyContext } from '/.ComponentA';
2. const value = useContext(MyContext);

Instead of props drilling this is a relible method
*/

import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("BroCode");

    return (
        <>
            <div className='box'>
                <h1>ComponentA</h1>
                <h2>{`Hello ${user}`}</h2>

                <UserContext.Provider value={user}>
                    <ComponentB />
                </UserContext.Provider>

            </div>
        </>
    );
}

export default ComponentA