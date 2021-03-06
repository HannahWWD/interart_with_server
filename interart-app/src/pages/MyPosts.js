import React,{useState,useEffect} from 'react'
import './MyPosts.scss'
import MyPostCard from '../components/MyPostCard'
import { Link } from 'react-router-dom'

export default function MyPosts() {
    const [newPosts, setNewPosts] = useState(null)
    const [deletedPostId,setDeletedPostId] = useState(null)
    // fetch all my posts from server
    useEffect(() => {
        fetch('/api/my-posts')
        .then(response => response.json())
        .then(data=>{
            setNewPosts(data.myPosts)
        })
        .catch(error => {
                console.log(error);

            })
    }, [])


    // delete a new post in server side
    const deletePost = (id)=>{
        setDeletedPostId(id)
    }
   
    useEffect(() => {
        deletedPostId && fetch("/api/delete-post", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: deletedPostId }), // body data type must match "Content-Type" header        
        })
            .then(res => res.json())
            .then(data => {
                setNewPosts(data.myPosts)
            })
            .catch(error => console.log(error))
    }, [deletedPostId])

    return (
        <div className="main-container">
            <div className="page-head">
            <h2>my posts</h2>
            <Link to="/"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 2.90437L9.84652 12.7509L0 22.5974L2.90437 25.5372L12.7509 15.6907L22.5974 25.5372L25.5372 22.5974L15.6907 12.7509L25.5372 2.90437L22.5974 0L12.7509 9.84652L2.90437 0L0 2.90437Z" fill="#BDBDBD" />
                </svg>
            </Link>
            </div>
            
            <div className="my-posts-container">
                <div className="my-posts-new">
                    <Link to="/new-post">
                        <button type="button">+</button>
                    </Link> 
                </div>

                {newPosts && newPosts.map(post=>(<MyPostCard 
                    delete = {deletePost}
                    title={post.title}
                    designer={post.designer}
                    image={post.image.regular}
                    description={post.description}
                    tags={post.tags}
                    topic={post.topic}
                    id={post.id}
                    key={Math.random()}
                />))}
            </div>
        </div>
    )
}
