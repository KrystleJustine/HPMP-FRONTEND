import React from "react";
import { Redirect, Link } from "react-router-dom";


const Home = props => {
    return (
        <div>

            {Object.keys(props.admin).length > 0 ? (
                <Redirect to="/projects"/>
            ) : (
               <div>
                <h1>Home</h1>
                <Link to="/login">Login</Link>
               </div>
            )}
        </div>
    );
};

export default Home;




