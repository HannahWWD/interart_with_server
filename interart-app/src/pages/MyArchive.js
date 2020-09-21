import React,{useState,useEffect} from 'react'
import './MyArchive.scss'
import PostCard from '../components/PostCard'

export default function MyArchive() {
    const [foundArticles, setFoundArticles] = useState([])

    // fetch all saved posts from server
    useEffect(() => {
        fetch('/api/save-post')
        .then(response => response.json())
        .then(data=>{
            console.log(data.articles)
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
                        description={article.description}
                        type="archive"
                    />

            )):<p>You don't have any archive yet :(</p>}
            
            </div>
        </div>
    )
}
