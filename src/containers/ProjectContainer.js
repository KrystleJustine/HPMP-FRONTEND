import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ProjectBoard from "../components/ProjectBoard"
import NavBar from "../components/NavBar";
import NewProject from '../components/NewProject'


class ProjectContainer extends Component {
    state = {
        filteredProjects: []
    };

    changeHandler = e => {
        let newArray = [...this.props.projects];
        let otherArray = newArray.filter(project =>
            project.name.toLowerCase().includes(e.target.value.toLowerCase())
        );

        this.setState({
            filteredProjects: otherArray,
            searchTerm: e.target.value
        });
    };

    searchSubmitHandler = (e,project) => {
        e.preventDefault();
        this.setState({ projects: [project, ...this.state.projects]},
            ()=> console.log(this.state.projects));
    };


    render() {
        return (
            <div>
                <NavBar searchResults={this.state.filteredProjects} changeHandler={this.changeHandler} handleLogout={this.handleLogout} value={this.searchTerm}/>
                <Switch>

                    <Route
                        path="/newprojects"
                        render={renderProps => {
                            console.log(renderProps);
                            return (
                                <NewProject handleSubmit={this.handleNewProjectSubmit}
                                            submitHandler={this.submitHandler}/>
                            )
                        }}
                    />
                    <Route
                    path="/projects"
                    render={() => {

                        let arrayOfProjectBoards = (this.state.filteredProjects.length > 0 ? this.state.filteredProjects : this.props.projects).map(
                            projectObj => (
                                <ProjectBoard key={projectObj.name} project={projectObj} handleDelete={this.props.handleDelete}/>
                            )
                        );
                        return (
                            <div>
                                <br/>
                                {this.props.projects.length > 0 ? (
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
        )
    }
}



export default withRouter(ProjectContainer)

{/*{this.props.projects.length > 0 ? (*/}
{/*<div className="board-container"> {arrayOfProjectBoards} </div>*/}
{/*) : (*/}
{/*<div className="ui segment">*/}
{/*<div className="ui active dimmer">*/}
{/*<div className="ui large text loader">Loading</div>*/}
{/*</div>*/}
{/*</div>*/}
{/*)}*/}



    {/*)}*/}
    {/*</div>*/}
    {/*);*/}
    {/*}}*/}
    {/*/>*/}

    {/*<Route*/}
    {/*path="/projects/:title"*/}
    {/*render={renderProps => {*/}
    {/*renderProps.history.push("/home");*/}
    {/*let name = renderProps.match.params.title;*/}
    {/*let project = this.state.projects.find(*/}
    {/*project => project.title.toLowerCase() === name.toLowerCase()*/}
    {/*);*/}
    {/*console.log("render project", project);*/}
    {/*return <ProjectBoard project={project}/>;*/}
    {/*}}*/}
    {/*/>*/}
