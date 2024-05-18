/**onChange = event handler used promarily with from element ex. <input>, <textarea>,
              <select> Tiggers a function every time the value of the input changes*/

import React, { useState } from 'react';

function MyComponent2() {

    const [name, setName] = useState("");
    const [quentity, setQuentity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    // function handlenameChange(event) {
    //     setName(event.target.value);
    // }

    function handleQuentityChange(event) {
        setQuentity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShhippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <>
            <div>

                {/* <p>Name: {name}</p>
                <input text="text" value={name} onChange={handlenameChange} placeholder='Enter name' /> */}

                <p>Name: {name}</p>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

                <p>Quentity: {quentity}</p>
                <input type="number" value={quentity} onChange={handleQuentityChange} />

                <p>Comment: {comment}</p>
                <textarea value={comment} onChange={handleCommentChange} placeholder='Enter comment'></textarea>
                <br />

                <p>Select any payment method</p>
                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p value={payment}>Payment value: {payment}</p>
                <label>


                    <input type="radio" value="Pick Up" checked={shipping === 'Pick Up'} onChange={handleShhippingChange} />
                    Pick Up
                </label>
                <br />
                <label>
                    <input type="radio" value="Delivery" checked={shipping === 'Delivery'} onChange={handleShhippingChange} />
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>
        </>
    );
}

export default MyComponent2