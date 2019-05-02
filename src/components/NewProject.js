import React from 'react';
import { withRouter } from "react-router-dom";
import Form from './Form'



const NewProject = (props) => {
        return (
            <div>
                <Form submitHandler={props.submitHandler} handleSubmit={props.handleSubmit}/>
            </div>
        );
    };


export default withRouter(NewProject)