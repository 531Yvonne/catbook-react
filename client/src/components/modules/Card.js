import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
import SingleStory from "./SingleStory";
import SingleComment from "./SingleComment";
import { NewComment } from "./NewPostInput";
import CommentsBlock from "./CommentsBlock";

import "./Card.css";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const Card = (props) => {
    // TODO (step6): define state to hold comments (refer to Feed)
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Implement a GET call to retrieve comments, and assign it to state
        get("/api/comment", { parent: props._id }).then(commentObjs => setComments(commentObjs))
    }, []);

    // let commentList = comments.map((comment => <SingleComment _id={comment._id} creator_name={comment.creator_name} content={comment.content} />));

    // if (commentList.length === 0) {
    //     commentList = "No Comments!"
    // };

    return (
        <div className="Card-container">
            <SingleStory _id={props._id} creator_name={props.creator_name} content={props.content} />

            {/* <div className="Card-commentSection">{commentList}</div>
            <NewComment storyId={props.storyId} /> */}
            {/* Here use CommentsBlock instead */}

            <CommentsBlock comments={comments} story={props._id} />
        </div >
    );
};

export default Card;
