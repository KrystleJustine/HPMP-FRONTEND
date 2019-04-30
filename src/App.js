import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Login from "./components/Login";
import NavBar from './components/NavBar';
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProjectContainer from "./containers/ProjectContainer"

class App extends Component {

    state = {
        admin: {}
    };

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



        render() {
            return (
                <div className="App">
                    <NavBar handleLogout={this.handleLogout}/>
                    <Switch>
                        <Route
                            path="/projects"
                            render={() => <ProjectContainer admin={this.state.admin} />}
                        />
                        <Route
                            path="/signup"
                            render={() => <Signup submitHandler={this.signupSubmitHandler} />}
                        />
                        <Route
                            path="/login"
                            render={() => <Login submitHandler={this.loginSubmitHandler} />}
                        />
                        <Route path="/home" render={() => <Home admin={this.state.admin} />} />

                    </Switch>
                </div>
            );
        }
    }

    export default withRouter(App);