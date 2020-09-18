import React, { useState } from 'react'
import './NewPosts.scss'
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form'

export default function NewPost() {

    const topics = ["art and culture", "human and nature", "technology", "science", "daily life", "society", "other"]

    const [input, setInput] = useState("");
    const [isClicked, setIsClicked] = useState(false)
    const {register} = useForm();


    function handleChange(event) {
        let value = event.target.value;
        
        if (value.length > 200) {
            value = value.slice(0, 200)

        }
        setInput(value);


    }

    function handleClicked() {
        setIsClicked(true)
    }

    return (
        <div className="main-container">
            <div className="page-head">
                <h2>New Posts</h2>
                <Link to="/"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 2.90437L9.84652 12.7509L0 22.5974L2.90437 25.5372L12.7509 15.6907L22.5974 25.5372L25.5372 22.5974L15.6907 12.7509L25.5372 2.90437L22.5974 0L12.7509 9.84652L2.90437 0L0 2.90437Z" fill="#BDBDBD" />
                </svg>
                </Link>
            </div>
            <div className="new-post">
                <div className="image-input">
                    <img className={isClicked ? null : "hidden"} src="https://images.unsplash.com/photo-1495232714953-ef7f41577786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="uploaded"></img>
                    <button type="button" id="add-image" onClick={handleClicked} className={isClicked ? "hidden" : null}>+</button>
                </div>
                <form action="http://localhost:5000/api/my-posts" method="post">
                    <input type="text" id="image" name="image" ref={register} defaultValue="https://images.unsplash.com/photo-1495232714953-ef7f41577786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" className="hidden"></input>
                    
                    <div className="form-group">
                        <label className="small-text" htmlFor="title">Title</label>
                        <input className="form-control" type="text" id="title" name="title"  ref={register} defaultValue="untitled"></input>
                    </div>
                    <div className="form-group">
                        <label className="small-text" htmlFor="designer">Designer</label>
                        <input className="form-control" type="text" id="designer" name="designer" ref={register} defaultValue="unknown"></input>
                    </div>
                    <div className="form-group">
                        <label className="small-text" htmlFor="topic">Topic</label>
                        <select className="form-control" name="topic"  ref={register} id="f-topic">
                            {topics.map(
                                (topic) => <option key={Math.random()} value={topic}>{topic}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="small-text" htmlFor="tags">Tags (optional)</label>
                        <input className="form-control" type="text" id="tags" name="tags"  ref={register} defaultValue="culture,texture"></input>
                    </div>
                    <div className="form-group">
                        <label className="small-text" htmlFor="description">Description(optional, less than 200 characters)</label>
                        <textarea
                            className="form-control"
                            type="text"
                            id="description"
                            name="description"
                            rows="4"
                            ref={register} 
                            onChange={handleChange}
                            value={input}>
                        </textarea>
                        <p className="small-text counter">{200 - input.length} characters left</p>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block btn-big" >Post</button>


                </form>
            </div>



        </div>
    )
}
