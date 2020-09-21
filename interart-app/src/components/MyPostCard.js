import React from 'react'
import './MyPostCard.scss'

export default function MyPostCard(props) {
 
    const option = new Intl.DateTimeFormat("en" , {
        timeStyle: "short",
        dateStyle: "short"
      });
    const now = option.format(Date.now())
    let content = props.description
    content = content.slice(0,200)

    return (
        <div className="my-post-card-container">
                <div className="row no-gutters">
                    <div className="col">
                        <img src={props.image} alt="cover"></img>
                    </div>
                    <div className="col info">
                        <div>
                            <p className="small-text">Time</p>
                            <p>{now}</p>
                        </div>
                        <div>
                            <p className="small-text">Designer</p>
                            <p>{props.designer}</p>
                        </div>
                        <div>
                            <p className="small-text">Topic</p>
                            <p>{props.topic}</p>
                        </div>
                        <div>
                            <p className="small-text">Tags</p>
                            <p>{props.tags.join(" / ")}</p>
                        </div>

                    </div>


                </div>
                <div>
                    <p className="small-text">Description</p>
                    <p>{content}</p>
                </div>
                <button type="button" className="expand-btn" onClick={()=>{
                    props.delete(props.id)
                }}>Delete</button>

            </div>


    )
}
