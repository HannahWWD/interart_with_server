import React from 'react'
import './Article.scss'
import Avatar from '../components/Avatar'
import Tag from '../components/Tag'
import FeatureCard from '../components/FeatureCard'

export default function Article() {


    return (
        <div className="main-container">
            <article className="article">
                <div>
                    <Avatar />
                    <button type="button" className="btn-small small-text">Follow</button>
                </div>
                <div className="article-info">
                <div>
                    <h2>Flower</h2>
                    <p>teamlab / human and nature</p>
                    <Tag tag="light" />
                    <Tag tag="broadless" />
                </div>

                {/* social group */}
                <div className="social-icons">
                    {/* like */}
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.55097 1.5126C6.6348 1.5126 7.66004 1.93613 8.42165 2.72269C8.45095 2.75294 8.48024 2.78319 8.50953 2.81345L9.56407 3.93277L10.6186 2.8437C11.3802 2.05714 12.4055 1.60336 13.4893 1.60336C14.5731 1.60336 15.5984 2.05714 16.3893 2.8437C17.9711 4.47731 17.9711 7.16975 16.3893 8.80336L9.56407 15.8521L3.76411 9.86218L3.79341 9.83193L2.70957 8.77311C2.68028 8.74286 2.65099 8.7126 2.6217 8.68235C1.86009 7.8958 1.44999 6.83697 1.44999 5.71765C1.44999 4.59832 1.88938 3.5395 2.65099 2.72269C3.4126 1.93613 4.43784 1.5126 5.55097 1.5126ZM5.55097 0C4.11562 0 2.70958 0.57479 1.62575 1.69412C-0.541915 3.93277 -0.541915 7.56303 1.62575 9.80168C1.65504 9.83193 1.68433 9.86218 1.71362 9.89244L9.56407 18L17.3852 9.89244C19.5529 7.65378 19.5236 4.02353 17.3852 1.78487C16.3014 0.665547 14.8953 0.0907566 13.46 0.0907566C12.0539 0.0907566 10.6186 0.635294 9.53478 1.75462C9.50548 1.72437 9.47619 1.69412 9.4469 1.66387C8.39236 0.544538 6.95702 0 5.55097 0Z" fill="#FF0266" />
                    </svg>

                    {/* save */}
                    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.89162 14.0542L7.5 13.8145L7.10838 14.0542L0.75 17.9471V0.75H14.25V17.9471L7.89162 14.0542Z" stroke="#FF0266" strokeWidth="1.5" />
                    </svg>

                    {/* share */}
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.972 18H2.028C1.46133 18 1 17.5105 1 16.9078V2.09225C1 1.49017 1.46133 1 2.028 1H7V1.70833H2.028C1.82867 1.70833 1.66667 1.88046 1.66667 2.09225V16.9078C1.66667 17.1195 1.82867 17.2917 2.028 17.2917H15.972C16.1713 17.2917 16.3333 17.1195 16.3333 16.9078V11.625H17V16.9078C17 17.5105 16.5393 18 15.972 18Z" fill="#FF0266" />
                        <path d="M7.66667 11.4175L7.19533 10.9167L16.4307 1.10342L17 1.35417V7.63283H16.3333V2.20912L7.66667 11.4175Z" fill="#FF0266" />
                        <path d="M17 1H10.758V1.70833H17V1Z" fill="#FF0266" />
                        <path d="M15.972 18H2.028C1.46133 18 1 17.5105 1 16.9078V2.09225C1 1.49017 1.46133 1 2.028 1H7V1.70833H2.028C1.82867 1.70833 1.66667 1.88046 1.66667 2.09225V16.9078C1.66667 17.1195 1.82867 17.2917 2.028 17.2917H15.972C16.1713 17.2917 16.3333 17.1195 16.3333 16.9078V11.625H17V16.9078C17 17.5105 16.5393 18 15.972 18Z" stroke="#FF0266" strokeWidth="0.5" />
                        <path d="M7.66667 11.4175L7.19533 10.9167L16.4307 1.10342L17 1.35417V7.63283H16.3333V2.20912L7.66667 11.4175Z" stroke="#FF0266" strokeWidth="0.5" />
                        <path d="M17 1H10.758V1.70833H17V1Z" stroke="#FF0266" strokeWidth="0.5" />
                    </svg>
                    </div>

                </div>

                <img src="https://images.unsplash.com/photo-1565841424346-c2bf899b27bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0" className="img-fluid" alt="art"></img>

                <h3>description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa laborum eveniet nulla, impedit perferendis. Voluptas laudantium accusamus laboriosam veniam eveniet velit, magni mollitia sequi, corrupti hic impedit ullam sit?</p>

                {/* closed icon */}
                <div className="closed">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 2.90437L9.84652 12.7509L0 22.5974L2.90437 25.5372L12.7509 15.6907L22.5974 25.5372L25.5372 22.5974L15.6907 12.7509L25.5372 2.90437L22.5974 0L12.7509 9.84652L2.90437 0L0 2.90437Z" fill="#BDBDBD" />
                    </svg>

                </div>
                


            </article>

            <div className="comment-related">
                <div>
                    <Avatar />
                    <div className="my-comment">
                        <textarea id="myComment" name="myComment" rows="4" placeholder="Share your thoughts about this post..."></textarea>
                        <div>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.5004 0C6.50519 0 0 6.50488 0 14.5004C0 22.496 6.50519 29 14.5004 29C22.4957 29 29 22.496 29 14.5004C29 6.50488 22.4957 0 14.5004 0ZM14.5004 1.37762C21.7365 1.37762 27.6229 7.26437 27.6229 14.5004C27.6229 21.7365 21.7365 27.6233 14.5004 27.6233C7.26442 27.6233 1.37707 21.7365 1.37707 14.5004C1.37707 7.26437 7.26442 1.37762 14.5004 1.37762ZM7.9271 8.1295C7.70681 8.14857 7.49914 8.27381 7.38381 8.48175C7.19836 8.81354 7.31864 9.23255 7.65097 9.41749L9.76319 10.5943L7.67249 11.4467C7.32042 11.5904 7.15138 11.9928 7.29505 12.3448C7.40384 12.6119 7.66164 12.7733 7.93338 12.7733C8.01968 12.7733 8.10756 12.7566 8.19248 12.7222L11.6118 11.3275C11.8574 11.2275 12.023 10.9958 12.0386 10.7315C12.0546 10.4671 11.918 10.2173 11.6871 10.0888L8.32068 8.21465C8.19623 8.14513 8.05928 8.11806 7.9271 8.1295ZM20.8775 8.1295C20.7454 8.11806 20.6092 8.14513 20.4848 8.21465L17.1174 10.0888C16.8952 10.2123 16.7592 10.4472 16.7633 10.701C16.7674 10.9548 16.9113 11.1863 17.1371 11.3024L20.5045 13.035C20.605 13.0868 20.7122 13.1112 20.8183 13.1112C21.068 13.1112 21.309 12.9756 21.4315 12.7383C21.6055 12.4001 21.4726 11.9846 21.1348 11.8106L18.9114 10.666L21.1545 9.41749C21.4864 9.23255 21.6057 8.81354 21.4208 8.48175C21.3048 8.27381 21.0976 8.14857 20.8775 8.1295ZM20.8757 16.1774L8.35385 16.2662C7.97562 16.2689 7.6698 16.5764 7.6698 16.9545C7.6698 20.0173 10.1724 22.4166 13.3672 22.4166H15.8721C19.0669 22.4166 21.5696 19.9786 21.5696 16.8658C21.5696 16.6822 21.4969 16.5058 21.3661 16.3764C21.2357 16.247 21.068 16.1751 20.8757 16.1774ZM20.136 17.5595C19.8032 19.559 18.0497 21.0399 15.8721 21.0399H13.3672C11.1515 21.0399 9.42652 19.6191 9.10245 17.6384L20.136 17.5595Z" fill="#BDBDBD" />
                            </svg>

                            <button type="button" className="btn-small">Send</button>

                        </div>


                    </div>

            
                <h3>Comments</h3>
                <div className="single-comment">
                    <img src={require('../images/avatar1.jpg')} alt="avatar"></img>
                    <div>
                        <p className="small-text">Peter Chow</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    </div>
                </div>

                <div className="single-comment">
                    <img src={require('../images/avatar.jpg')} alt="avatar"></img>
                    <div>
                        <p className="small-text">Angela Mollyson</p>
                        <p>Cool project!</p>
                    </div>
                </div>

                <div className="single-comment">
                    <img src={require('../images/avatar1.jpg')} alt="avatar"></img>
                    <div>
                        <p className="small-text">Tyler Vue</p>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                    </div>
                </div>
            </div>


                <div className="related-box">
                    <h2>Related Posts</h2>
                    <FeatureCard
                        cover="https://images.unsplash.com/photo-1565841424346-c2bf899b27bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0"
                        title="Title"
                        designer="LStudio"
                        topic="Art & Culture"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat, fuga tempore cumque iure delectus repellendus architecto nisi. Eveniet fuga dolores perferendis ducimus reiciendis quaerat maiores magni possimus voluptate earum."
                    />

                    <FeatureCard
                        cover="https://images.unsplash.com/photo-1565841424346-c2bf899b27bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0"
                        title="Title"
                        designer="LStudio"
                        topic="Art & Culture"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat, fuga tempore cumque iure delectus repellendus architecto nisi. Eveniet fuga dolores perferendis ducimus reiciendis quaerat maiores magni possimus voluptate earum."
                    />

                    <FeatureCard
                        cover="https://images.unsplash.com/photo-1565841424346-c2bf899b27bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0"
                        title="Title"
                        designer="LStudio"
                        topic="Art & Culture"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat, fuga tempore cumque iure delectus repellendus architecto nisi. Eveniet fuga dolores perferendis ducimus reiciendis quaerat maiores magni possimus voluptate earum."
                    />
                </div>
            </div>
        </div>
        

    )
}
