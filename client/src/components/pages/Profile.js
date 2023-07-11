import React, { useState } from "react";
import "../../utilities.css";
import "./Profile.css";
import CatHappiness from "../modules/CatHappiness";


const Profile = () => {
    const [happyCount, setHappyCount] = useState(0);

    const increaseHappiness = () => {
        setHappyCount(happyCount + 1);
    };

    return (
        <div>
            <div className="Profile-avatarContainer" onClick={increaseHappiness}>
                <div className="Profile-avatar" />
            </div>
            <h1 className="Profile-name u-textCenter">Yves Yang</h1>
            <hr className="Profile-line" />
            <div className="u-flex">
                <div className="Profile-subContainer u-textCenter">
                    <h4 className="Profile-subTitle">About Me</h4>
                    <div id="profile-description">
                        Extra Challenge: Modify catbook to show a personalized description here!
                    </div>
                </div>
                <div className="Profile-subContainer u-textCenter">
                    <h4 className="Profile-subTitle">Cat Happiness</h4>
                    <CatHappiness happyCount={happyCount} />
                </div>
                <div className="Profile-subContainer u-textCenter">
                    <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
                    <div id="favorite-cat">corgi</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
