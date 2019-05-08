import React from 'react';
import { withRouter } from "react-router-dom";
import NewProjectForm from './NewProjectForm'



const NewProject = (props) => {
    console.log('NewProject');
        return (
            <div>
                <br/>
                <NewProjectForm handleNewProjectSubmit={props.handleNewProjectSubmit} />
            </div>
        );
    };


export default withRouter(NewProject)