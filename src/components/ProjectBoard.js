import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, Feed } from 'semantic-ui-react'
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
        <div className="column">
            <Card>
                <Card.Content>
            <ul className="auto-sized-grid" key={props.id}>
                <h1>{props.project.name}</h1>
                {taskArray}
            </ul>
                <div className="ui bottom attached button"><i className="add icon"></i>Add New Lead</div>
                </Card.Content>
            </Card>
        </div>
    )
};
export default withRouter(ProjectBoard);