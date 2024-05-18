import React, { useState } from 'react'

function UpdStateArray() {

    const [foods, setFoods] = useState([]);

    function handleAddFood() {
        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <>
            <div>
                <h2>List of the Food</h2>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
                </ul>
                <input type="text" id='foodinput' placeholder='Enter food name'/>
                <br />
                <button onClick={handleAddFood}>Add food</button>
            </div>
        </>
    );
}

export default UpdStateArray