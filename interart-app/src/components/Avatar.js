import React from 'react'
import './Avatar.scss'
 
function Avatar(props) {
    return (
        <div className="author-info">
                <img src={require('../images/avatar1.jpg')} alt="author avatar"></img>
                <span className="small-text">Caleb Anton</span>
        </div>
    )
}

export default Avatar
