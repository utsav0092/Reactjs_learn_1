// /**probs = read-only properties that are shared between components.
//  * A parent component can send data to a child component.
//  * <Component keyvalue />
 
//  **propTypes = a machanism that ensures that the passed value is of 
//  * correct datatype.
//  * age: PropTypes.number
 
//  **defaultProps = default values for props in case they are noto passed 
//  *from the parent component name: "Guest" 
//  */

// import PropTypes from 'prop-types'
// import React from "react";

// function Student(props) {
//     return (
//         <>
//             <div className="student">
//                 <p>Name: {props.name}</p>
//                 <p>Age: {props.age}</p>
//                 {/* Using ternary operator to access boolean datatype */}
//                 <p>Student: {props.isStudent ? "Yes" : "No"}</p>
//             </div>
//         </>
//     );
// }

// Student.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool,
// }

// Student.defaultProps = {
//     name: "Guest",
//     age : 0,
//     isStudent: false,
// }

// export default Student