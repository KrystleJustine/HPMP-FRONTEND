import React from "react";
import { Redirect } from "react-router-dom";
const Home = props => {
    console.log("admin", props.admin);
    return (
        <div>
            {Object.keys(props.admin).length > 0 ? (
                <h1>Home</h1>
            ) : (
                <Redirect to="/login" />
            )}
        </div>
    );
};

export default Home;