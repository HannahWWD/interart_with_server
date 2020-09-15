import React from 'react'
import './MyPostCard.scss'

export default function MyPostCard() {
    const option = new Intl.DateTimeFormat("en" , {
        timeStyle: "short",
        dateStyle: "short"
      });
    const now = option.format(Date.now())
    let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    content = content.slice(0,200)

    return (
        <div className="my-post-card-container">
                <div className="row no-gutters">
                    <div className="col">
                        <img src="https://images.unsplash.com/photo-1593072188319-5006e116315e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0" alt="cover"></img>
                    </div>
                    <div className="col info">
                        <div>
                            <p className="small-text">Time</p>
                            <p>{now}</p>
                        </div>
                        <div>
                            <p className="small-text">Designer</p>
                            <p>TeamLab</p>
                        </div>
                        <div>
                            <p className="small-text">Topic</p>
                            <p>Nature</p>
                        </div>
                        <div>
                            <p className="small-text">Tags</p>
                            <p>light, borderless</p>
                        </div>

                    </div>


                </div>
                <div>
                    <p className="small-text">Description</p>
                    <p >{content}</p>
                </div>
                <button type="button" className="expand-btn">Delete</button>

            </div>


    )
}
