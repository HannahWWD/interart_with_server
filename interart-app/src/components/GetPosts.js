import {useEffect, useState} from 'react'

export default function GetPosts(pageNumber,searchInput=null) {
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [posts,setPosts] = useState([]);
    const [hasMore,setHasMore] = useState(false);

    useEffect(()=>{
        const query = {page:pageNumber,search:searchInput}
        setLoading(true);
        setError(false)
        fetch('/api/get-posts',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(query), // body data type must match "Content-Type" header        
        }).then(response=>response.json())
        .then(data=>{
            const matchPosts= data.sendPosts
            setPosts(prev=>pageNumber === 1? [...matchPosts] : [...prev,...matchPosts])
            setHasMore(matchPosts.length !== 0)
            setLoading(false)
        }).catch(error=>{
            console.log(error);
            setError(true)
        })
    

    },[pageNumber,searchInput])

    return {loading,error,posts,hasMore}
}
