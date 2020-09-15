import React from 'react';
import './Collection.scss';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';



export default function Collection(props) {
    return (
        <div className="main-container">
            <div className="collection-head">
                <div>
                    <h2>The TeamLab Collection</h2>
                    <p className="small-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure voluptates incidunt fugit quia obcaecati nobis at totam amet maxime, impedit blanditiis distinctio reiciendis corrupti saepe? Ratione facere aspernatur necessitatibus?</p>
                </div>

                <form className="search-bar">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.1301 19.0993C22.9842 16.7279 23.8636 13.7385 23.5889 10.7409C23.3143 7.74333 21.9063 4.96348 19.6522 2.96852C17.3981 0.973555 14.4678 -0.086192 11.4591 0.00548867C8.45044 0.0971693 5.59009 1.33337 3.46166 3.46188C1.33323 5.59038 0.0971032 8.4508 0.00548168 11.4595C-0.0861398 14.4683 0.973646 17.3986 2.96862 19.6527C4.9636 21.9068 7.74343 23.3147 10.741 23.5893C13.7385 23.8639 16.7279 22.9844 19.0991 21.1303L24.5441 26.5751C24.6773 26.7094 24.8357 26.8161 25.0101 26.889C25.1846 26.9619 25.3718 26.9996 25.5609 27C25.75 27.0004 25.9373 26.9634 26.1121 26.8912C26.2869 26.819 26.4457 26.7131 26.5794 26.5793C26.7131 26.4456 26.8191 26.2868 26.8913 26.112C26.9634 25.9372 27.0004 25.7499 27 25.5608C26.9996 25.3717 26.9619 25.1845 26.8889 25.0101C26.816 24.8356 26.7094 24.6772 26.5751 24.5441L21.1301 19.0993ZM11.8391 20.7662C10.0735 20.7662 8.34756 20.2427 6.87949 19.2618C5.41142 18.2809 4.26719 16.8867 3.5915 15.2554C2.9158 13.6242 2.739 11.8292 3.08343 10.0975C3.42786 8.36581 4.27807 6.77512 5.52653 5.52661C6.77499 4.27811 8.36564 3.42786 10.0973 3.08339C11.829 2.73892 13.6239 2.9157 15.2552 3.59137C16.8864 4.26704 18.2806 5.41126 19.2615 6.87934C20.2424 8.34741 20.766 10.0734 20.766 11.839C20.7634 14.2058 19.822 16.4749 18.1485 18.1485C16.4749 19.8221 14.2059 20.7635 11.8391 20.7662V20.7662Z" fill="#BDBDBD" />
                    </svg>

                    <input type="text" placeholder="Try search for 'teamLab'" name="collection-search" id="collection-search" />
                </form>
            </div>

            <div className="collection-feature-container">
                <h2>featured projects</h2>
                <div>
                    <Link to="#"><div className="square" style={{backgroundImage:"url('https://images.unsplash.com/photo-1593072188319-5006e116315e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0')"}}>
                    </div>
                    </Link>
                    <Link to="#"><div className="square" style={{backgroundImage:"url('https://images.unsplash.com/photo-1593072188319-5006e116315e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0')"}}>
                    </div>
                    </Link>
                    <Link to="#"><div className="square" style={{backgroundImage:"url('https://images.unsplash.com/photo-1593072188319-5006e116315e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0')"}}>
                    </div>
                    </Link>
                    <Link to="#"><div className="square" style={{backgroundImage:"url('https://images.unsplash.com/photo-1593072188319-5006e116315e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0')"}}>
                    </div>
                    </Link>
                    
                </div>
                    
            </div>

            <div className="all-collection">
            <h2>All About TeamLab</h2>
            <div className="card-columns">
                    <PostCard 
                        postImg="https://images.unsplash.com/photo-1593072188319-5006e116315e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0"
                        title = "Louis Hot Naked"
                        designer="Lstudio"
                        topic = "art & culture"
                        numLikes="317"
                        numComments="201"
                    />
                      <PostCard 
                        postImg="https://images.unsplash.com/photo-1505299344687-ee45ad431f9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0"
                        title = "Louis Hot Naked"
                        designer="Lstudio"
                        topic = "art & culture"
                        numLikes="317"
                        numComments="201"
                    />
                      <PostCard 
                        postImg="https://images.unsplash.com/photo-1583075347180-4bcc34aab3af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0"
                        title = "Louis Hot Naked"
                        designer="Lstudio"
                        topic = "art & culture"
                        numLikes="317"
                        numComments="201"
                    />
                      <PostCard 
                        postImg="https://images.unsplash.com/photo-1584815012715-25cd6e05a3f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0"
                        title = "Louis Hot Naked"
                        designer="Lstudio"
                        topic = "art & culture"
                        numLikes="317"
                        numComments="201"
                    />
                    <PostCard 
                        postImg="https://images.unsplash.com/photo-1584815012715-25cd6e05a3f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0"
                        title = "Louis Hot Naked"
                        designer="Lstudio"
                        topic = "art & culture"
                        numLikes="317"
                        numComments="201"
                    />
                </div>
                </div>

            
        </div>
    )
}
