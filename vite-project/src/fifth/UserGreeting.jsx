/**Conditional rendering = allows you to control what gets rendered in
 * your application based on certain conditions 
 * (show, hide, or change componants)*/

import PropTypes from 'prop-types'
import React from "react";

function UserGreeting(props) {
    const welcomeMessege =  <h2 className="welcome-messege">
                                    Welcome {props.username}
                            </h2>
    
    const loginPrompt = <h2 className="login-prompt">
                                      Don't know you
                        </h2>

    // if(props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    //     return <h2>first log in yourself</h2>
    return (
        props.isLoggedIn ? welcomeMessege : loginPrompt
    );
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting