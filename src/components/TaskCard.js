import React from 'react';
import { withRouter } from "react-router-dom";




const TaskCard = (props) => {

    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <img className="right floated mini ui image" src={props.task.lead.img} alt=""/>
                        <div className="header">{props.task.lead.name}</div>
                    <div className="stack">{props.task.lead.stack}</div>
                        <div className="description">{props.task.description}</div>
                    </div>
                </div>
            </div>
    )

};
export default withRouter(TaskCard);

