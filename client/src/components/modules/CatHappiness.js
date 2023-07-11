import React from "react";
import "./CatHappiness.css";

const CatHappiness = (props) => {
    return (
        <div className="CatHappiness-container">
            <div className="CatHappiness-story">
                <p className="CatHappiness-storyContent">
                    {props.happyCount}
                </p>
            </div>
        </div>
    );
};

export default CatHappiness;
