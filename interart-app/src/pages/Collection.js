import React from 'react';
import './Collection.scss';
import PostCard from '../components/PostCard';
import { LoremIpsum } from 'lorem-ipsum';
import { Link } from 'react-router-dom'



export default function Collection(props) {

    const matchedName = props.browserProps.match.params.name
    console.log(props.browserProps)

    //    if(props.data){
    //        var matchedName = Object.keys(props.data).filter(
    //            item=>{
    //                return item === props.browserProps.match.params.name}
    //         )
    //         matchedName = matchedName[0]
    //         console.log(matchedName)

    //    }

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 4,
            min: 2
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });


    return (
        <div className="main-container">
            {/* closed icon */}
                <div className="collection-closed cursor" onClick={props.browserProps.history.goBack}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 2.90437L9.84652 12.7509L0 22.5974L2.90437 25.5372L12.7509 15.6907L22.5974 25.5372L25.5372 22.5974L15.6907 12.7509L25.5372 2.90437L22.5974 0L12.7509 9.84652L2.90437 0L0 2.90437Z" fill="#BDBDBD" />
                    </svg>

                </div>
            <div className="collection-head">
                <div>
                    <h2>{matchedName} Collection</h2>
                    <p className="small-text">{lorem.generateParagraphs(1)}</p>
                </div>

                <form className="search-bar">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.1301 19.0993C22.9842 16.7279 23.8636 13.7385 23.5889 10.7409C23.3143 7.74333 21.9063 4.96348 19.6522 2.96852C17.3981 0.973555 14.4678 -0.086192 11.4591 0.00548867C8.45044 0.0971693 5.59009 1.33337 3.46166 3.46188C1.33323 5.59038 0.0971032 8.4508 0.00548168 11.4595C-0.0861398 14.4683 0.973646 17.3986 2.96862 19.6527C4.9636 21.9068 7.74343 23.3147 10.741 23.5893C13.7385 23.8639 16.7279 22.9844 19.0991 21.1303L24.5441 26.5751C24.6773 26.7094 24.8357 26.8161 25.0101 26.889C25.1846 26.9619 25.3718 26.9996 25.5609 27C25.75 27.0004 25.9373 26.9634 26.1121 26.8912C26.2869 26.819 26.4457 26.7131 26.5794 26.5793C26.7131 26.4456 26.8191 26.2868 26.8913 26.112C26.9634 25.9372 27.0004 25.7499 27 25.5608C26.9996 25.3717 26.9619 25.1845 26.8889 25.0101C26.816 24.8356 26.7094 24.6772 26.5751 24.5441L21.1301 19.0993ZM11.8391 20.7662C10.0735 20.7662 8.34756 20.2427 6.87949 19.2618C5.41142 18.2809 4.26719 16.8867 3.5915 15.2554C2.9158 13.6242 2.739 11.8292 3.08343 10.0975C3.42786 8.36581 4.27807 6.77512 5.52653 5.52661C6.77499 4.27811 8.36564 3.42786 10.0973 3.08339C11.829 2.73892 13.6239 2.9157 15.2552 3.59137C16.8864 4.26704 18.2806 5.41126 19.2615 6.87934C20.2424 8.34741 20.766 10.0734 20.766 11.839C20.7634 14.2058 19.822 16.4749 18.1485 18.1485C16.4749 19.8221 14.2059 20.7635 11.8391 20.7662V20.7662Z" fill="#BDBDBD" />
                    </svg>

                    <input type="text" placeholder={`search ${matchedName}'s projects`} name="collection-search" id="collection-search" />
                </form>
            </div>

            <div className="collection-feature-container">
                <h2>featured projects</h2>
                <div>

                    {props.data && props.data[matchedName].slice(0, 4).map(item => {
                        const image = item.image.small;

                        return (<Link to={"/article/" + item.id} key={Math.random()}><div className="square" style={{ backgroundImage: `url(${image})` }}>
                        </div></Link>)

                    })}

                </div>

            </div>

            <div className="all-collection">
                <h2>All About {matchedName}</h2>
                <div className="card-columns">
                    {props.data && props.data[matchedName].map(
                        item => (<PostCard
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
                            description={item.description}
                            id={item.id}
                        />
                        )

                    )}

                </div>
            </div>


        </div>
    )
}
