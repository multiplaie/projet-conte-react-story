import React from 'react'
import { useParams, Link } from "react-router-dom";
import  StoryForm from "../components/StoryForm";

function Story() {
    let params = useParams();
    return (
        <main id="story-page" className="">
            <div className="bg-beige p-5 rounded">
                <Link to='/'>Revenir à la liste des histoires</Link>
                <StoryForm StoryId={params.story_id}  />
            </div>
        </main>
    )


}

export default Story
