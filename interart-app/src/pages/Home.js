import React, { useState, useRef, useCallback, useEffect } from 'react'
import './Home.scss'
import FeatureCard from '../components/FeatureCard'
import PostCard from '../components/PostCard'
import CollectionCard from '../components/CollectionCard';
import { Link } from 'react-router-dom';
import GetPosts from '../components/GetPosts';
import Searchbar from '../components/Searchbar';

const Home = (props) => {
    const [page, setPage] = useState(1);
    const [archivedArticles, setArchivedArticles] = useState(null)
    const [debouncedInput, setDebouncedInput] = useState("");
    


    // static lorems file
    const lorems = require('../components/lorems')

    // data for render
    let renderSource = [];
    if (props.data) {
        // if active tab is home
        if (props.tab === "featured") {
            for (let item of props.data) {
                const itemObj = {
                    title: item.title,
                    designer: item.designer,
                    topic: item.topic,
                    description: item.description,
                    cover: item.image.thumb,
                    id: item.id
                }

                renderSource.push(itemObj)
            };
        }

        // if active tab is designers or topics
        if (props.tab === "designers" || props.tab === "topics") {
            for (let i=0;i<Object.keys(props.data).length;i++) {
                // get cover thumbnail
                let key = Object.keys(props.data)[i]
                let covers = [];
                props.data[key].map(item => covers.push(item.image.thumb))
                if (key !== "unknown" && renderSource.length < 4) {
                    const itemObj = {
                        title: key,
                        designer: null,
                        topic: null,
                        description: lorems[i],
                        cover: covers.slice(0, 4),
                        id: key
                    }
                    renderSource.push(itemObj)
                }

            }
        }
    }


    // dynamically generate posts on the right hand side
  const getDebouncedInput = (debouncedVal) =>{
      setDebouncedInput(debouncedVal)
  }

    // if search bar value changes, reset posts
    useEffect(() => {
        setPage(1)
    }, [debouncedInput])


    // implemented infinite scrolling until no more posts from the server
    let { loading, posts, hasMore } = debouncedInput === "teamlab" ? GetPosts(page, "teamlab") : GetPosts(page);
    const observer = useRef();
    const lastPost = useCallback(last => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(
            entries => {
                // when the last item is in somewhere on the page
                if (entries[0].isIntersecting && hasMore) {
                    setPage(prevPage => prevPage + 1)

                }
            })
        if (last) observer.current.observe(last);
    }, [loading, hasMore]);


    // fetch "saved" posts and render in the home page
    useEffect(() => {
        fetch('api/save-post')
            .then(response => response.json())
            .then(data => {
                setArchivedArticles(data.lists)
            })
            .catch(error => {
                console.log(error);

            })
    }, [])



    return (
        <div className="main-container home">
            <div className="feature-card-container">
                <div>
                    <div><h3>{props.tab === "featured" ? "Posts Picked For You" : `${props.tab} picked for you`}</h3></div>
                    <button type="button">
                        <svg width="22px" height="22px" viewBox="0 0 16 16" className="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                            <path fillRule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                    </button>
                </div>

                {props.tab === "featured" ? renderSource.map(item => (
                    <FeatureCard
                        key={Math.random()}
                        cover={item.cover}
                        title={item.title}
                        designer={item.designer}
                        topic={item.topic}
                        description={item.description}
                        id={item.id}

                    />)) : renderSource.map(item => (
                        <CollectionCard
                            key={Math.random()}
                            cover={item.cover}
                            title={item.title}
                            designer={item.designer}
                            topic={item.topic}
                            description={item.description}
                            id={item.id}
                        />
                    ))
                }

                {props.tab !== "featured" && <Link to={'/all/' + props.tab} className="expand-btn to-all">View All {props.tab}</Link>}

            </div>

            <div className="search-container">
                <Searchbar getDebouncedInput = {getDebouncedInput}/>

                <div className="card-columns">
                    {debouncedInput === "teamlab" && <CollectionCard
                        cover={['https://images.unsplash.com/photo-1504280539878-538b933c05b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0',
                            'https://images.unsplash.com/photo-1562461044-3729439149bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0',
                            'https://images.unsplash.com/photo-1522658429337-5917c5277aa2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0',
                            'https://images.unsplash.com/photo-1592228792327-51740e9ba5bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0']}
                        title="teamLab"
                        designer={null}
                        topic={null}
                        description={lorems[0]}
                        id="teamLab"

                    />}

                    {posts.map((item, index) => {
                        if (posts.length === index + 1) {
                            return (
                                <PostCard
                                    ref={lastPost}
                                    key={Math.random()}
                                    postImg={item.image.small}
                                    title={item.title}
                                    designer={item.designer}
                                    topic={item.topic}
                                    numLikes={item.likes}
                                    numComments={Math.floor(item.likes * Math.random())}
                                    author={item.author}
                                    avatar={item.avatar}
                                    tags={item.tags}
                                    id={item.id}
                                    saved={archivedArticles && archivedArticles.includes(item.id)}
                                    description={item.description}
                                />

                            )

                        } else {
                            return (
                                <PostCard
                                    postImg={item.image.small}
                                    key={Math.random()}
                                    title={item.title}
                                    designer={item.designer}
                                    topic={item.topic}
                                    numLikes={item.likes}
                                    numComments={Math.floor(item.likes * Math.random())}
                                    author={item.author}
                                    avatar={item.avatar}
                                    tags={item.tags}
                                    id={item.id}
                                    saved={archivedArticles && archivedArticles.includes(item.id)}
                                    description={item.description}
                                />
                            )

                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
