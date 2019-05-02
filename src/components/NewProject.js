import React from 'react';
import { withRouter } from "react-router-dom";
import Form from './Form'
import NavBar from './NavBar'


const NewProject = (props) => {
        return (
            <div>
                <NavBar/>
                <br/>
                <Form submitHandler={props.submitHandler} handleSubmit={props.handleSubmit}/>
            </div>
        );
    };


export default withRouter(NewProject)