import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
import SingleStory from "../modules/SingleStory"
import { NewStory } from "../modules/NewPostInput";
import Card from "../modules/Card";

const Feed = () => {
    //Define state to hold stories
    const [stories, setStories] = useState([]);

    useEffect(() => {
        // GET call to retrieve stories and assign it to state
        get("/api/stories").then(storyObjs => setStories(storyObjs));
    }, []);

    let storyList = stories.map((story => <Card _id={story._id} creator_name={story.creator_name} content={story.content} />));
    if (storyList.length === 0) {
        storyList = <div>No Stories!</div>
    }

    return (
        <div>
            <NewStory />
            {storyList}
        </div>
    );
};

export default Feed;
