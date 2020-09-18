import React,{useState,useEffect} from 'react'

const Save = (props)=> {
    const [isSaved, setIsSaved] = useState(props.saved)
    const [isClicked,setIsClicked] = useState(false)
 
    function handleClicked(){
        setIsClicked(true)
    }
    function handleSaved(){
        isSaved ? setIsSaved(false):setIsSaved(true)
    }

    useEffect(() => {
        setIsSaved(props.saved);
      }, [props]);
   
    useEffect(() => {
        let unmounted = false
        let query = { isSaved: isSaved, id: props.id}
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

    }, [isClicked,isSaved,props.id])



    return (
        <div onClick={()=>{
            handleSaved();
            handleClicked();}}>
            {/* save icon */}
            <svg width="18" height="24" viewBox="0 0 15 20" fill={isSaved ? "#FF0266":"none"} xmlns="http://www.w3.org/2000/svg">
                <path d="M7.89162 14.0542L7.5 13.8145L7.10838 14.0542L0.75 17.9471V0.75H14.25V17.9471L7.89162 14.0542Z" stroke="#FF0266" strokeWidth="1.5" />
            </svg>

        </div>
    )
}


export default Save