import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Search from "../components/Search";
import ProjectBoard from "../components/ProjectBoard"
import NavBar from "../components/NavBar";
import NewProject from '../components/NewProject'


class ProjectContainer extends Component {

    state = {
        filteredProjects : [],
        projects : []

    };

    componentDidMount() {
        let token = localStorage.getItem("token") || ''
        token.length > 0
            ? fetch("http://localhost:3007/projects")
                .then(resp => resp.json())
                .then(projects =>
                    this.setState({ projects: projects, filteredProjects: projects })
                )
            : this.props.history.push("/login");
    }

    submitHandler = (e,project) => {
        e.preventDefault();
        this.setState({ projects: [project, ...this.state.projects]},
        ()=> console.log(this.state.projects));
    };

    changeHandler = e => {
        let newArray = [...this.state.projects];
        let otherArray = newArray.filter(project =>
            project.title.toLowerCase().includes(e.target.value.toLowerCase())
        );

        this.setState({
            filteredProjects: otherArray,
            searchTerm: e.target.value
        });
    };

    // to add a new project board
    handleSubmit = (event, projectObj) => {
        event.preventDefault();
        fetch ('http://localhost:3007/projects', {
            method: 'POST',
            headers: {
                "Accepts": 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(projectObj)})
            .then(resp => resp.json())
            .then(newBoard => {
                const newSetOfProjects = [newBoard, ...this.state.projects];
                this.setState({
                    projects: newSetOfProjects
                }, console.log (this.state.projects))
            });
        // update state with new projects... make a new array with
        // project info... add new project object to the top of the list

    };
    // to delete a project board
    handleDelete = (projectToRemove) => {
        const updatedBoardArray = this.state.projects.filter(project => project.id !== projectToRemove.id);
        this.setState({
            projects : updatedBoardArray
        }, () => this.handleDeleteBackEnd(projectToRemove));
    };
// removes the project board off the back end to persist when page reloads
handleDeleteBackEnd = (projectToRemove) => {
    fetch(`http://localhost:3007/projects/${projectToRemove.id}`, {method : 'DELETE'})
};

    render() {
        console.log(this.state);
        return (
            <div>
                <NavBar onChange={this.changeHandler} handleLogout={this.handleLogout} value={this.searchTerm}/>
                <Switch>
                    <Route
                        path="/projects/:title"
                        render={renderProps => {
                            renderProps.history.push("/home");
                            let name = renderProps.match.params.title;
                            let project = this.state.projects.find(
                                project => project.title.toLowerCase() === name.toLowerCase()
                            );
                            console.log("render project", project);
                            return <ProjectBoard project={project} />;
                        }}
                    />
                    <Route
                        path="/newprojects"
                        render={renderProps => {
                            console.log(renderProps);
                            return (
                            <NewProject handleSubmit={this.handleSubmit} submitHandler={this.submitHandler}/>
                        )
                        }}
                        />
                    <Route
                        path="/projects"
                        render={() => {
                            let arrayOfProjectBoards = this.state.projects.map(
                                projectObj => (
                                    <ProjectBoard key={projectObj.name} project={projectObj} handleDelete={this.handleDelete}/>
                                )
                            );

                            return (
                                <div>

                                    <br />

                                    {this.state.projects.length > 0 ? (
                                        <div className="board-container"> {arrayOfProjectBoards} </div>
                                    ) : (
                                        <div className="ui segment">
                                            <div className="ui active dimmer">
                                                <div className="ui large text loader">Loading</div>
                                            </div>
                                        </div>

                                    )}
                                </div>
                            );
                        }}
                    />

                </Switch>
            </div>
        );
    }
}


export default withRouter(ProjectContainer)
