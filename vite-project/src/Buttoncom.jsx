  /*click event = An interactin with the user clicks on a specitic element.
                  We can respond to clicks by passing a 
                  callback to the onClick event handler. */

import React from 'react'

function Buttoncom() {

    let count = 0;

    // const handleClick = (e)=> console.log(e);
    const handleClick = (e)=> e.target.textContent = "OUCH!😅";

    // const handleClickthree = (name)=> {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else {
    //         console.log(`${name} I said stop clicking me "NOW"!`);
    //     }
    // }

    // const handleClicktwo = (name)=> console.log(`${name} stop clicking me`)

  return (
    <>
    <button onDoubleClick={(e)=>handleClick(e)}>Click me🙂</button>

    {/**If we just write like this it will run automatically */}
    {/* <button onClick={handleClicktwo("Bro")}>Click me🙂</button>     */}

    {/**Wrap it in a arrow function*/}
    {/* <button onClick={()=> handleClicktwo("Bro")}>Click me🙂</button>     */}
    {/* <button onClick={()=> handleClickthree("Bro")}>Click me🙂</button>     */}
    </>
  );
}

export default Buttoncom