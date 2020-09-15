import React from 'react'
import './Tag.scss'

function Tag(props) {
    return (
       <div className="tag">
            <span className="small-text">{props.tag}</span>
       </div>
    )
}

export default Tag
