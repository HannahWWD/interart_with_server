import React from 'react'
import './All.scss'
import FeatureCard from '../components/FeatureCard'

export default function All() {
    return (
        <div className="main-container">
            <h2>all posts for you</h2>
            <div className="post-container">
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

                <FeatureCard
                    cover="https://images.unsplash.com/photo-1565841424346-c2bf899b27bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NDA4MH0"
                    title="Title"
                    designer="LStudio"
                    topic="Art & Culture"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat, fuga tempore cumque iure delectus repellendus architecto nisi. Eveniet fuga dolores perferendis ducimus reiciendis quaerat maiores magni possimus voluptate earum."
                />


            </div>


        </div>
    )
}
