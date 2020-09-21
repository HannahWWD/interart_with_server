import React from 'react'
import './All.scss'
import { LoremIpsum } from "lorem-ipsum";
import CollectionCard from '../components/CollectionCard';

export default function All(props) {
    const renderSources = [];
    // configure lorem generator
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
    console.log(props.data)

    for (let key of Object.keys(props.data)){
        if(key !== "unknown"){
            let covers = [];
            props.data[key].map(item=>covers.push(item.image.thumb));
            let itemObj = {
                title:key,
                designer:null,
                topic:null,
                description:lorem.generateParagraphs(1),
                cover:covers.slice(0,4),
                id:key

        };
        renderSources.push(itemObj);
        

    }}

    return (
        <div className="main-container">
            <h2>all posts for you</h2>
            <div className="post-container">
                {props.data && renderSources.map(renderSource=>(
                    <CollectionCard
                    key = {Math.random()}
                    cover={renderSource.cover}
                    title={renderSource.title}
                    designer={renderSource.designer}
                    topic={renderSource.topic}
                    description={renderSource.description}
                    id={renderSource.id}
                    />
                ))}


            </div>


        </div>
    )
}
