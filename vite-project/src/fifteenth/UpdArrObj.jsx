import React, { useState } from 'react'

function UpdArrObj() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMaker, setCarMaker] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = { year: carYear, maker: carMaker, model: carModel }
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMaker("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index ));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakerChange(event) {
        setCarMaker(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <>
            <div>
                <h2>List of Cars object</h2>
                <ul>
                    {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.maker} {car.model}</li>)}
                </ul>
                <input type="number" value={carYear} onChange={handleYearChange} /><br />
                <input type="text" value={carMaker} onChange={handleMakerChange} placeholder='Enter the maker name' /><br />
                <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter the model name' /><br />
                <button onClick={handleAddCar}>Add Car</button>
            </div>
        </>
    );
}

export default UpdArrObj