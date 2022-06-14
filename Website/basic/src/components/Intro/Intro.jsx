import React from 'react'
import "./intro.css";

const Intro = () => {
    
    return (
    <div className='intro'>
        <div className="introLeft">
            <div className="leftWrapper">
                <h2 className='introText'>Hello, my name is</h2>
                <h1 className='introName'>Serge Chvorun</h1>
            </div>
        </div>
        <div className="introRight">RightSide</div>
    </div>
    )
}

export default Intro;

