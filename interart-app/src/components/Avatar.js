import React from 'react'
import './Avatar.scss'
 
function Avatar(props) {
    return (
        <div className="author-info">
                <img src={props.avatar} alt="author avatar"></img>
                <span className="small-text">{props.author}</span>
        </div>
    )
}

export default Avatar
