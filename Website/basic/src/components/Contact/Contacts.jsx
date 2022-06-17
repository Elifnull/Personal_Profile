import React from 'react'
import './Contacts.css'

const Contacts = () => {
    return (
        <div className='contactsPage'>
            <div className="contactBackground"></div>
            <div className="contactWrapper">
                <div className="contactsLeft">
                    <h1 className="contactsTitle">lets discussprojects</h1>
                    <div className="contactInfo">
                        <div className="contactInfoItem">
                            <img src='' alt='' className='contactInfoIMG'/>
                        </div>
                    </div>
                </div>
                <div className="contactsRight">
                <p>Side</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts


//css issue turned out to be a <div> issue. note!!!! 