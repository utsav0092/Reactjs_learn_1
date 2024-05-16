import React from "react";
import PropTypes from 'prop-types';

function List(props) {

    const category = props.category;
    const itemsList = props.items;

    //Alphabeticlal
    //fruits.sort((a, b) => a.name.localeCompare(b.name));
    //Reverse Alphabeticlal  
    // fruits.sort((a, b) => b.name.localeCompare(a.name));

    //Numetic order ascending order
    // fruits.sort((a, b) => a.calories - b.calories);
    //Reverse numeric descending order
    //fruits.sort((a, b) => b.calories - a.calories);

    // const HighCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
    // const loswCalFruits = fruits.filter((fruit) => fruit.calories < 100);

    // const listitems = fruits.map((fruits) => <li key={fruits.id}>{fruits.name}: &nbsp;{fruits.calories}</li>);
    const listitems = itemsList.map((item) => <li key={item.id}>{item.name}: &nbsp;{item.calories}</li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listitems}</ul>
            <ol className="list-items">{listitems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        }))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List