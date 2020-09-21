import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './DevNote.scss'

export default function DevNote() {
    const [isSeen, setIsSeen] = useState(false)

    useEffect(() => {
        setIsSeen(localStorage.getItem('seen')||
       false)
        }, [])
    
      useEffect(() => {
        localStorage.setItem("seen", isSeen)
      }, [isSeen])

    return (
        <div className={isSeen?"hidden":"dev-note"}>
            <h2>A message from the developer</h2>
            <p>Hello and welcome! This is a mockup webapp for a student project. This mockup is only for personal use and will NOT be included in any types of commercial projects in the future. </p>
            <p>Artwork photos used in this mockup are fetched from the <Link to="https://unsplash.com/developers"> Unsplash API</Link>. Note that most of the details that associated with an artwork are collected from the Internet. If details couldn't be founded , a random designer name and topic will be assigned. </p>
            <p>If you have any suggestions for this website, feel free to contact hannahwu0707@gmail.com</p>
            <button className="btn btn-primary" type="button" onClick={()=>{
                setIsSeen(true)
            }}>Yes, I understand this is a mockup</button>
        </div>
    )
}
