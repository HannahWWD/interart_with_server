import React from 'react'
import './FeatureCard.scss'


function FeatureCard(props) {
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


    return (
            <div className="card-customized">
                    <div className="left">
                        <img src={props.cover} className="card-img" alt="cover"></img>
                    </div>

                    <div className="right">
                        <div className="">
                            <h3 className="card-title">{props.title}</h3>
                            <p>{info}</p>
                            <p className="card-text small-text">{description}</p>
                            
                        </div>
                    </div>
            </div>
    )
}

export default FeatureCard
