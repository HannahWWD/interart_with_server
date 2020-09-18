import {useEffect} from 'react'

export default function SaveToArchive(isClicked,isSaved,id) {

    useEffect(() => {
        let unmounted = false
        let query = { isSaved: isSaved, id: id}
        if(isClicked && !unmounted){fetch('http://localhost:5000/api/save-post', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(query), // body data type must match "Content-Type" header        
        }).then(response => response.json())
        .catch(error => {
                console.log(error);

            })}
        return ()=> { unmounted=true }

    }, [isClicked,isSaved,id])

    return null
}
