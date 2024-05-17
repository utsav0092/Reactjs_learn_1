import React from 'react'

function Profilepic() {

    const imageUrl = './src/assets/profilepic.png';

    const handleClickone = (e) => e.target.style.display = "none";

    return (
        <>
            <img onClick={(e) => handleClickone(e)} className="profile-image" src={imageUrl} alt="image" />
        </>
    );
}

export default Profilepic