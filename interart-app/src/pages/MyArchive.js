import React,{useState,useEffect} from 'react'
import './MyArchive.scss'
import PostCard from '../components/PostCard'

export default function MyArchive(props) {
    const [foundArticles, setFoundArticles] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/save-post')
        .then(response => response.json())
        .then(data=>{
            setFoundArticles(data.articles)
        })
        .catch(error => {
                console.log(error);

            })
    }, [])

    return (
        <div className="main-container">
            <div className="page-head">
                <h2>My Archives</h2>
                {/* <Link to="/"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 2.90437L9.84652 12.7509L0 22.5974L2.90437 25.5372L12.7509 15.6907L22.5974 25.5372L25.5372 22.5974L15.6907 12.7509L25.5372 2.90437L22.5974 0L12.7509 9.84652L2.90437 0L0 2.90437Z" fill="#BDBDBD" />
                </svg>
                </Link> */}
            </div>
            
            <div className="archive-box">
            {foundArticles.length ?  foundArticles.map(article=>(
                <PostCard
                        key= {Math.random()}
                        postImg={article.image.small}
                        title = {article.title}
                        designer={article.designer}
                        topic = {article.topic}
                        numLikes= {article.likes}
                        numComments={article.likes * Math.random()}
                        author={article.author}
                        avatar={article.avatar}
                        tags={article.tags}
                        id={article.id}
                        type="archive"
                    />

            )):<p>You don't have any archive yet :(</p>}
            
            </div>
            
            
        </div>
    )
}
