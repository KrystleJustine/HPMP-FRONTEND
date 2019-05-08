import React from "react";
import { Redirect } from "react-router-dom";
import NavBar from './NavBar'

const Home = props => {
    console.log('home')
    return (
        <div>
        <NavBar/>
            <div>
            {Object.keys(props.admin).length > 0 ? (
                <Redirect to="/projects"/>
            ) : (
               <div>
                <h1>Home</h1>

               </div>
            )}
        </div>
        </div>
    );
};

export default Home;




