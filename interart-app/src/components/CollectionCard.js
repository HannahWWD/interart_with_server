import React from 'react'
import './FeatureCard.scss'
import './CollectionCard.scss'
import { Link } from 'react-router-dom';


function CollectionCard(props) {
    // set character display limit
    const maxInfo = 30;
    const maxDescription = 60;
    let info = null;
    if(props.designer && props.topic){
        info = `${props.designer} / ${props.topic}`
        if(info.length>maxInfo){
            info = info.slice(0,maxInfo) + "..."
        }
    }
    
    let description = props.description;
    if(description.length>maxDescription){
        description = description.slice(0,maxDescription) + "..."
    }
    while(props.cover.length<4){
        props.cover.push(props.cover[0])
    }


    return (
            <Link to={"/collection/"+encodeURI(props.id)}>
            <div className="card-customized collection-card">
                    <div className="left">
                        {props.cover.map(item=>(<img src={item} alt="cover" key={Math.random()}></img>))}
                    </div>

                    <div className="right">
                        <div>
                            <h3 className="card-title">{props.title}</h3>
                            <p>{info}</p>
                            <p className="card-text small-text">{description}</p>
                            
                        </div>
                    </div>
            </div>
            </Link>
    )
}

export default CollectionCard
