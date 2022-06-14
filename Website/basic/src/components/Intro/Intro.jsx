import React from 'react'
import "./intro.css";
import Dev from "../../img/serge_dev.png";

const Intro = () => {
    
    return (
    <div className='intro'>
        <div className="introLeft">
            <div className="introLeftWrapper">
                <h2 className='introText'>Hello, my name is</h2>
                <h1 className='introName'>Serge Chvorun</h1>
                <div className="introTitle">
                    <div className="introTitleWrapper">
                        <div className="introTitleText">Web Developer</div>
                        <div className="introTitleText">FrontEnd Engineer</div>
                        <div className="introTitleText">React Dev</div>
                        <div className="introTitleText">Python Developer</div>
                    </div>
                </div>
                <p className="introDescription">
                I create applications and design cool experiences using ReactJS and Python, 
                both on Backend and Frontend, all while maintaining my love of Vectors and Tensors.
                </p>
            </div>
        </div>
        <div className="introRight">
            <div className="RightBackground"></div>
            <img src={Dev} className='DevImage'alt='picture of Developer'/>
        </div>
    </div>
    )
}

export default Intro;

