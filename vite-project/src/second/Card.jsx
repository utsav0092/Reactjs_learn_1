import React from "react";
import profilePic from './assets/profilepic.png'

function Card(){
    return(
        <>
        <div className="card">
            {/* https://via.placeholder.com/150 */}
            <img className="card-image" src={profilePic} alt="profile picture"/>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make youtube videos and play video games</p>
        </div>
        </>
    );
}

export default Card