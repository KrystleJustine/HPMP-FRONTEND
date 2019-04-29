import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Form from "../components/Form";
import Search from "../components/Search";
import ProjectBoard from "../components/ProjectBoard"


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

    submitHandler = project => {
        this.setState({ projects: [project, ...this.state.projects] });
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

    render() {
        return (
            <div>
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
                        path="/projects"
                        render={() => {
                            let arrayOfProjectBoards = this.state.filteredProjects.map(
                                projectObj => (
                                    <ProjectBoard key={projectObj.name} project={projectObj} />
                                )
                            );
                            return (
                                <div>
                                    <Form submitHandler={this.submitHandler} />
                                    <br />
                                    <Search
                                        value={this.state.searchTerm}
                                        changeHandler={this.changeHandler}
                                    />
                                    <br />

                                    {this.state.projects.length > 0 ? (
                                        arrayOfProjectBoards
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
