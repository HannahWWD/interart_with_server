import React from 'react'
import './MyPosts.scss'
import MyPostCard from '../components/MyPostCard'
import { Link } from 'react-router-dom'

export default function MyPosts() {
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

                <MyPostCard />


            </div>
            
        </div>
    )
}
