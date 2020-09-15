import React,{useState} from 'react'
import './NewPosts.scss'
import { Link } from 'react-router-dom';

export default function NewPost() {

    const topics = ["art and culture", "human and nature", "technology", "science", "daily life", "society","other"]

    const [input, setInput] = useState("");
    const [isClicked, setIsClicked] = useState(false)

    function handleChange(event){
        let value = event.target.value;
        if(value.length > 200){
            value = value.slice(0,200)
            
        }
        setInput(value);
       

    }

    function handleClicked(){
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
                    <img className={isClicked? null:"hidden"} src="https://images.unsplash.com/photo-1525595260765-82398f322ac3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0" alt="uploaded"></img>
                    <button type="button" id="add-image" onClick={handleClicked} className={isClicked && "hidden"}>+</button>
                </div>
                <form>
                    <div className="form-group">
                        <label className="small-text" for="f-title">Title (optional)</label>
                        <input className="form-control" type="text" id="f-title" name="f-title"></input>
                    </div>
                    <div className="form-group">
                        <label className="small-text" for="f-designer">Designer (optional)</label>
                        <input className="form-control" type="text" id="f-designer" name="f-designer"></input>
                    </div>
                    <div className="form-group">
                        <label className="small-text" for="f-topic">Topic</label>
                        <select className="form-control" name="f-topic" id="f-topic">
                            {topics.map(
                                (topic) => <option value={topic}>{topic}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="small-text" for="f-tags">Tags (optional)</label>
                        <input className="form-control" type="text" id="f-tags" name="f-tags"></input>
                    </div>
                    <div className="form-group">
                        <label className="small-text" for="f-description">Description(optional, less than 200 characters)</label>
                        <textarea 
                        className="form-control" 
                        type="text" 
                        id="f-description" 
                        name="f-description" 
                        rows="4" 
                        onChange={handleChange}
                        value={input}>
                        </textarea>
                        <p className="small-text counter">{200-input.length} characters left</p>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block btn-big">Post</button>


                </form>
            </div>



        </div>
    )
}
