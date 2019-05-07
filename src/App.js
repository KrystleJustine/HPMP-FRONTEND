import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProjectContainer from "./containers/ProjectContainer"
import NewProject from "./components/NewProject";
import ProjectBoard from "./components/ProjectBoard";


class App extends Component {

    state = {
        admin: {},
        projects : [],
        leads : []
    };

    // gets project from back end db
    componentDidMount() {
        let token = localStorage.getItem("token") || ''
        token.length > 0
            ? fetch("http://localhost:3007/projects")
                .then(resp => resp.json())
                .then(projects =>
                    this.setState({ projects: projects })
                )
            : this.props.history.push("/login");
    }

    // function that handles logout
   handleLogout = () => {
       this.setState({
           admin: {}
       })

       localStorage.removeItem("token");
       this.props.history.push("/login");
   }


    // componentDidMount = () => {
    //     let token = localStorage.token;
    //     token
    //     ? fetch ("http://localhost:3007/current_admin", {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accepts': 'application/json',
    //             Authorization: `${token}`
    //         }
    //     })
    //         .then(resp => resp.json())
    //         .then(admin => {
    //             this.setState ({ admin }, () => {
    //                     console.log(admin);
    //                  this.props.history.push("/projects");
    //                 })
    //             })
    //     : this.props.history.push("/signup");
    // };

    signupSubmitHandler = adminInfo => {
        fetch("http://localhost:3007/projects", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({ admin: adminInfo })
        })
            .then(resp => resp.json())
            .then(adminData => {
                this.setState({ admin: adminData.admin}, () => {
                    localStorage.setItem("token", adminData.jwt);
                    this.props.history.push("/projects");
                })
            })
    };

    loginSubmitHandler = adminInfo => {
        fetch("http://localhost:3007/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({ admin: adminInfo })
        })
            .then(resp => resp.json())
            .then(adminData => {
                this.setState({ admin: adminData.admin}, () => {
                    localStorage.setItem("token", adminData.jwt);
                    this.props.history.push("/projects");
                })
            })
    };

    // to add a new project board
    handleNewProjectSubmit = (event, projectObj) => {
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

        // need this to redirect to the all projects page

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

    arrayOfProjectBoards = this.state.projects.map(
        projectObj => (
            <ProjectBoard key={projectObj.name} project={projectObj} handleDelete={this.handleDelete}/>
        )
    );

        render() {
            return (
                <div className="App">

                    <Switch>
                        <Route
                            path="/"
                            render={() => <ProjectContainer admin={this.state.admin} projects={this.state.projects}
                                                            handleDelete={this.handleDelete} />}
                        />
                        <Route
                            path="/signup"
                            render={() => <Signup submitHandler={this.signupSubmitHandler} />}
                        />
                        <Route
                            path="/login"
                            render={() => <Login submitHandler={this.loginSubmitHandler} />}
                        />
                        <Route
                            path="/home"
                            render={() => <Home admin={this.state.admin} />}
                        />
                        <Route
                            path="/newprojects"
                            render={() => <NewProject handleNewProjetSubmit={this.handleNewProjectSubmit()}
                            />}
                        />
                    </Switch>
                </div>
            );
        }
    }

    export default withRouter(App);