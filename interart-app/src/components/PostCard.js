import React from 'react'
import './PostCard.scss'
import Tag from './Tag'
import Avatar from './Avatar'

function PostCard(props) {

    return (
        <div className={props.type ==="archive"? "card post-card archive-post-card":"card post-card"}>
            <Avatar author={props.author} avatar={props.avatar}/>
            <img src={props.postImg} alt="background"></img>
            
            <div className="post-info-short">
                <div className="info-text">
                <h3>{props.title}</h3>
                <p>{`${props.designer} / ${props.topic}`}</p>
                <div id="tags">
                    {props.tags ?
                    props.tags.map(tag=>(<Tag key={Math.random()} tag={tag}/>))
                    :<Tag tag={"placeholder"} />}
                </div>
                </div>              
              {/* save icon */}
                <svg width="18" height="24" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.89162 14.0542L7.5 13.8145L7.10838 14.0542L0.75 17.9471V0.75H14.25V17.9471L7.89162 14.0542Z" stroke="#FF0266" strokeWidth="1.5" />
                </svg>
               
            </div>

            <div className={props.type === "mobile" ? "post-description" : "hidden"}>
            <p className="small-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit vel amet vero labore atque quia excepturi quaerat itaque dignissimos! Velit distinctio maiores assumenda accusamus nihil iusto minima esse ea doloremque?</p>

            </div>

            <div className="react-post">
                <div id="like">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.55097 1.5126C6.6348 1.5126 7.66004 1.93613 8.42165 2.72269C8.45095 2.75294 8.48024 2.78319 8.50953 2.81345L9.56407 3.93277L10.6186 2.8437C11.3802 2.05714 12.4055 1.60336 13.4893 1.60336C14.5731 1.60336 15.5984 2.05714 16.3893 2.8437C17.9711 4.47731 17.9711 7.16975 16.3893 8.80336L9.56407 15.8521L3.76411 9.86218L3.79341 9.83193L2.70957 8.77311C2.68028 8.74286 2.65099 8.7126 2.6217 8.68235C1.86009 7.8958 1.44999 6.83697 1.44999 5.71765C1.44999 4.59832 1.88938 3.5395 2.65099 2.72269C3.4126 1.93613 4.43784 1.5126 5.55097 1.5126ZM5.55097 0C4.11562 0 2.70958 0.57479 1.62575 1.69412C-0.541915 3.93277 -0.541915 7.56303 1.62575 9.80168C1.65504 9.83193 1.68433 9.86218 1.71362 9.89244L9.56407 18L17.3852 9.89244C19.5529 7.65378 19.5236 4.02353 17.3852 1.78487C16.3014 0.665547 14.8953 0.0907566 13.46 0.0907566C12.0539 0.0907566 10.6186 0.635294 9.53478 1.75462C9.50548 1.72437 9.47619 1.69412 9.4469 1.66387C8.39236 0.544538 6.95702 0 5.55097 0Z" fill="#BDBDBD"/>
</svg>

                <span className="small-text">{props.numLikes}</span>
                </div>
                <div id="comment">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88297 1.1875C10.8508 1.1875 11.8305 1.38344 12.7894 1.76937C13.7245 2.14344 14.6122 2.69859 15.3603 3.36953C16.1262 4.05828 16.7319 4.84203 17.1534 5.70594C17.5928 6.59953 17.8155 7.53172 17.8155 8.48172C17.8155 9.48515 17.6255 10.4559 17.2455 11.3673C16.8714 12.2698 16.3341 13.0744 15.6453 13.7631C14.9387 14.4697 14.1016 15.0219 13.1545 15.4078C12.1481 15.8175 11.0467 16.0253 9.88 16.0253C9.32187 16.0253 8.13734 15.9066 7.57922 15.7937L7.13687 15.7047L6.74797 15.9303L4.22453 17.3998V14.6181L3.78516 14.2619C2.92422 13.5642 2.27109 12.7241 1.83766 11.7681C1.41016 10.8062 1.1875 9.6989 1.1875 8.47875C1.1875 7.51984 1.40719 6.58469 1.84359 5.70594C2.27109 4.84203 2.88562 4.06125 3.67234 3.38734C4.47094 2.70156 5.40609 2.16422 6.44515 1.78422C7.53469 1.38641 8.68953 1.1875 9.88297 1.1875ZM9.88297 0C4.43531 0 0 3.79703 0 8.47875C0 11.2634 1.01234 13.5405 3.04 15.1852V17.9698C3.04 18.7298 3.29234 18.9822 3.67234 18.9822C4.05234 18.9822 4.30469 18.7298 4.30469 18.7298L7.34469 16.9575C7.97703 17.0852 9.24468 17.2098 9.87703 17.2098C15.3247 17.2098 19 13.1605 19 8.47875C19.0059 3.79703 14.443 0 9.88297 0Z" fill="#BDBDBD"/>
<path d="M8.17297 8.89734C8.17297 9.25165 8.31372 9.59146 8.56425 9.84199C8.81479 10.0925 9.15459 10.2333 9.5089 10.2333C9.86322 10.2333 10.203 10.0925 10.4536 9.84199C10.7041 9.59146 10.8448 9.25165 10.8448 8.89734C10.8448 8.54303 10.7041 8.20323 10.4536 7.95269C10.203 7.70216 9.86322 7.5614 9.5089 7.5614C9.15459 7.5614 8.81479 7.70216 8.56425 7.95269C8.31372 8.20323 8.17297 8.54303 8.17297 8.89734Z" fill="#BDBDBD"/>
<path d="M4.36703 8.89734C4.36703 9.07278 4.40158 9.2465 4.46872 9.40858C4.53586 9.57067 4.63426 9.71794 4.75832 9.84199C4.88237 9.96605 5.02964 10.0644 5.19173 10.1316C5.35381 10.1987 5.52753 10.2333 5.70297 10.2333C5.8784 10.2333 6.05212 10.1987 6.21421 10.1316C6.37629 10.0644 6.52356 9.96605 6.64762 9.84199C6.77167 9.71794 6.87007 9.57067 6.93721 9.40858C7.00435 9.2465 7.0389 9.07278 7.0389 8.89734C7.0389 8.7219 7.00435 8.54818 6.93721 8.3861C6.87007 8.22402 6.77167 8.07675 6.64762 7.95269C6.52356 7.82864 6.37629 7.73023 6.21421 7.6631C6.05212 7.59596 5.8784 7.5614 5.70297 7.5614C5.52753 7.5614 5.35381 7.59596 5.19173 7.6631C5.02964 7.73023 4.88237 7.82864 4.75832 7.95269C4.63426 8.07675 4.53586 8.22402 4.46872 8.3861C4.40158 8.54818 4.36703 8.7219 4.36703 8.89734Z" fill="#BDBDBD"/>
<path d="M11.967 8.89734C11.967 9.25165 12.1078 9.59146 12.3583 9.84199C12.6089 10.0925 12.9487 10.2333 13.303 10.2333C13.6573 10.2333 13.9971 10.0925 14.2476 9.84199C14.4982 9.59146 14.6389 9.25165 14.6389 8.89734C14.6389 8.54303 14.4982 8.20323 14.2476 7.95269C13.9971 7.70216 13.6573 7.5614 13.303 7.5614C12.9487 7.5614 12.6089 7.70216 12.3583 7.95269C12.1078 8.20323 11.967 8.54303 11.967 8.89734Z" fill="#BDBDBD"/>
</svg>
                <span className="small-text">{props.numComments}</span>
                </div>
                <div id="share">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.972 18H2.028C1.46133 18 1 17.5105 1 16.9078V2.09225C1 1.49017 1.46133 1 2.028 1H7V1.70833H2.028C1.82867 1.70833 1.66667 1.88046 1.66667 2.09225V16.9078C1.66667 17.1195 1.82867 17.2917 2.028 17.2917H15.972C16.1713 17.2917 16.3333 17.1195 16.3333 16.9078V11.625H17V16.9078C17 17.5105 16.5393 18 15.972 18Z" fill="#BDBDBD"/>
<path d="M7.66667 11.4175L7.19533 10.9167L16.4307 1.10342L17 1.35417V7.63283H16.3333V2.20912L7.66667 11.4175Z" fill="#BDBDBD"/>
<path d="M17 1H10.758V1.70833H17V1Z" fill="#BDBDBD"/>
<path d="M15.972 18H2.028C1.46133 18 1 17.5105 1 16.9078V2.09225C1 1.49017 1.46133 1 2.028 1H7V1.70833H2.028C1.82867 1.70833 1.66667 1.88046 1.66667 2.09225V16.9078C1.66667 17.1195 1.82867 17.2917 2.028 17.2917H15.972C16.1713 17.2917 16.3333 17.1195 16.3333 16.9078V11.625H17V16.9078C17 17.5105 16.5393 18 15.972 18Z" stroke="#BDBDBD" strokeWidth="0.5"/>
<path d="M7.66667 11.4175L7.19533 10.9167L16.4307 1.10342L17 1.35417V7.63283H16.3333V2.20912L7.66667 11.4175Z" stroke="#BDBDBD" strokeWidth="0.5"/>
<path d="M17 1H10.758V1.70833H17V1Z" stroke="#BDBDBD" strokeWidth="0.5"/>
</svg>

                </div>
            </div>
            
           

           
            
        </div>
    )
}

export default PostCard
