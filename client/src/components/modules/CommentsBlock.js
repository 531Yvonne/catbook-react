import React from "react";
import SingleComment from "./SingleComment";
import { NewComment } from "./NewPostInput";

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} creator_name
 * @property {string} content of the story/comment
 */

/**
 * Component that holds all the comments for a story
 *
 * Proptypes
 * @param {ContentObject[]} comments
 * @param {ContentObject} story
 */
const CommentsBlock = (props) => {
    return (
        <div className="Card-commentSection">
            {props.comments.map(comment =>
                <SingleComment _id={comment._id}
                    creator_name={comment.creator_name}
                    content={comment.content} />
            )}
            <NewComment storyId={props.story} />
        </div>
    );
};

export default CommentsBlock;
