import React from "react";


class Login extends React.Component {
    state = {
        username: "",
        password: "",
        signupModal: false

    };

    changeHandler = e => {
        this.setState({
            [e.target.placeholder]: e.target.value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        this.props.submitHandler(this.state);
        this.setState({
            username: "",
            password: ""
        });
    };

    toggleSignup = (e)=> {
        this.setState({
            signupModal : !this.state.signupModal
        })
    }




    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="login-container-wrapper clearfix">
                        <ul className="switcher clearfix">
                            <li className="first logo active" data-tab="login" onClick={this.toggleSignup}>
                                <a>Login</a>
                            </li>
                            <li className="second logo" data-tab="sign_up" onClick={this.toggleSignup}>
                                <a>Sign Up</a>
                            </li>
                        </ul>

                        {this.state.signupModal === false ?
                            <div className="tab-content">
                                <div className="tab-pane active" id="login">
                                    <form className="form-horizontal login-form" onSubmit={this.submitHandler} >
                                        <div className="form-group relative">
                                            <input className="form-control input-lg" id="login_username"
                                                   placeholder="Username" required="" type="username"/> <i
                                            className="fa fa-user"></i>
                                        </div>
                                        <div className="form-group relative">
                                            <input className="form-control input-lg" id="login_password"
                                                   placeholder="Password" required="" type="password"/> <i
                                            className="fa fa-lock"></i>
                                        </div>

                                        <div className="form-group">
                                            <button className="btn btn-success btn-lg btn-block" type="submit">Login
                                            </button>
                                        </div>
                                        <hr/>
                                    </form>
                                </div>

                            </div>
                            :

                            <div className="tab-content">
                                <div className="tab-pane active" id="singup">
                                    <form className="form-horizontal login-form" onSubmit={this.submitHandler}>
                                        <div className="form-group relative">
                                            <input className="form-control input-lg"
                                                   placeholder="E-mail Address" required="" name="username" type="username"/> <i
                                            className="fa fa-user"></i>
                                        </div>
                                        <div className="form-group relative">
                                            <input className="form-control input-lg" id="login_password"
                                                   placeholder="Password" required="" name="password" type="password"/> <i
                                            className="fa fa-lock"></i>
                                        </div>
                                        <div className="form-group relative repeatPassword">
                                            <input className="form-control input-lg" id="login_password"
                                                   placeholder="Repeat Password" required="" type="password"/> <i
                                            className="fa fa-lock"></i>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-success btn-lg btn-block" type="submit">Sign Up!
                                            </button>
                                        </div>
                                        <hr/>

                                    </form>
                                </div>

                            </div>




                        }

                    </div>
                </div>
            </div>
      )
}

        }


export default Login;

        {/*<form onSubmit={this.submitHandler}>*/}
            {/*<input*/}
                {/*type="text"*/}
                {/*placeholder="username"*/}
                {/*value={this.state.username}*/}
                {/*onChange={this.changeHandler}*/}
            {/*/>*/}
            {/*<input*/}
                {/*type="password"*/}
                {/*placeholder="password"*/}
                {/*value={this.state.password}*/}
                {/*onChange={this.changeHandler}*/}
            {/*/>*/}
            {/*<button>login</button>*/}
        {/*</form>*/}