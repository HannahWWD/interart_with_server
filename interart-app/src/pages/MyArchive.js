import React from 'react'
import './MyArchive.scss'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom';

export default function MyArchive() {
    return (
        <div className="main-container">
            <div className="page-head">
                <h2>My Archives</h2>
                <Link to="/"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 2.90437L9.84652 12.7509L0 22.5974L2.90437 25.5372L12.7509 15.6907L22.5974 25.5372L25.5372 22.5974L15.6907 12.7509L25.5372 2.90437L22.5974 0L12.7509 9.84652L2.90437 0L0 2.90437Z" fill="#BDBDBD" />
                </svg>
                </Link>
            </div>
            
            <div className="archive-box">
            <PostCard 
                        postImg="https://images.unsplash.com/photo-1593072188319-5006e116315e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0"
                        title = "Louis Hot Naked"
                        designer="Lstudio"
                        topic = "art & culture"
                        numLikes="317"
                        numComments="201"
                        type="archive"
                    />
            </div>
            
            
        </div>
    )
}
