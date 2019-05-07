import React from "react";
import {  withRouter } from "react-router-dom";
import { Card } from 'semantic-ui-react'
import TaskCard from "./TaskCard";


// for each board I need 3 task cards
const ProjectBoard = (props) => {
    const taskArray = (props.project.tasks.map(task=> {
    return (
        <div key={task.id}>
            <TaskCard task={task} />
        </div>
        )
        })
    );
    return (

        <div className="row">
            <div className="ui segment">
            <Card>
                <Card.Content>
                    <div className="column"></div>
                    <button className="right attached ui icon button" onClick={()=>{props.handleDelete(props.project)}}>
                        <i className="trash alternate icon"></i></button>
                    <ul className="auto-sized-grid" key={props.id}>
                        <h1>{props.project.name}</h1>
                        {taskArray}
                    </ul>
                </Card.Content>
            </Card>
        </div>

        </div>

    )

};
export default withRouter(ProjectBoard);
