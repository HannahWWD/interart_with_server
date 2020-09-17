import {useEffect, useState} from 'react'

export default function GetPosts(pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [posts,setPosts] = useState([]);
    const [hasMore,setHasMore] = useState(false);

    useEffect(()=>{
        const query = {page:pageNumber}
        setLoading(true);
        setError(false)
        fetch('http://localhost:5000/api/get-posts',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(query), // body data type must match "Content-Type" header        
        }).then(response=>response.json())
        .then(data=>{
            const posts = data.sendPosts
            setPosts(prev=>{return [...prev,...posts]})
            setHasMore(posts[posts.length-1].id !== "VTDm03aGzl4")
            setLoading(false)
        }).catch(error=>{
            console.log(error);
            setError(true)
        })
    

    },[pageNumber])

    return {loading,error,posts,hasMore}
}
