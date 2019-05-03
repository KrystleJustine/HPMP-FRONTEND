import React, { Component} from "react";
import { Link, withRouter } from "react-router-dom";
import {
    Menu,
    Dropdown,
    Image,
    Icon,
    Button,
    Search,
    Popup
} from 'semantic-ui-react'


class NavBar extends Component {

    state = {
        activeTab: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const  { activeTab } = this.state
        return (
           <div>


               <Menu className='ui pointing secondary menu'>

                    <Menu.Item name='home' active={activeTab === 'home'} as={Link} to="/home" onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>

                    <Menu.Item name='newprojects' active={activeTab === 'newprojects'} as={Link} to="/newprojects" onClick={this.handleItemClick}>
                        New Project
                    </Menu.Item>

                    <Menu.Item name='projects' active={activeTab === 'projects'} as={Link} to="/projects" onClick={this.handleItemClick}>
                        All Projects
                    </Menu.Item>


                   <div className='right menu'>
                       <div className="item">
                           <Search value={this.props.searchTerm} changeHandler={this.props.changeHandler} onChange={this.changeHandler}/>
                       </div>
                   </div>


                    <Menu.Menu position="right">
                        <Button.Group color='blue'>
                            <Dropdown icon='large fa-terminal' selection button className='icon'>
                                {/*<Popup trigger={<Button icon='fa-terminal'/>} content='Click Here'/>*/}
                                <Dropdown.Menu>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item icon='plus' text='New Project' as={Link} to="/newprojects"/>
                                    <Dropdown.Item icon='address card outline' text='Projects' as={Link} to="/projects"/>
                                    <Dropdown.Item icon='fa-sign-out-alt' text='Log Out' as={Link} to="/login"/>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Button.Group>
                    </Menu.Menu>

                </Menu>
            </div>
        );
    };
}

export default withRouter(NavBar);