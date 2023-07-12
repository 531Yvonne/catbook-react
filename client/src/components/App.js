import React from "react";
import NavBar from "./modules/NavBar.js";
import Profile from "./pages/Profile.js";
import Feed from "./pages/Feed.js";
// Import Router and NotFound
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";

// To use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a function.
 */
const App = () => {
    return (
        // <> is like a <div>, but won't show
        // up in the DOM tree
        <>
            <NavBar />
            <div className="App-container">
                {/* Router between pages */}
                <Router>
                    <Profile path="/profile" />
                    <Feed path="/" />
                    <NotFound default />
                </Router>
            </div>
        </>
    );
};

export default App;
