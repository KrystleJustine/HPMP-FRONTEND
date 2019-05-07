import React, { Component} from "react";
import { Link, withRouter } from "react-router-dom";
import SearchBar from './SearchBar';
import {
    Menu,
    Dropdown,
    Button
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
                           <SearchBar searchResults={this.props.searchResults} value={this.props.searchTerm} changeHandler={this.props.changeHandler} placeholder="...gfkfhdkhf!!" />
                       </div>
                   </div>


                    <Menu.Menu position="right">
                        <Button.Group color='blue'>
                            <Dropdown icon='terminal large' button className='icon'>
                                <Dropdown.Menu>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item icon='plus' text='New Project' as={Link} to="/newprojects"/>
                                    <Dropdown.Item icon='address card outline' text='Projects' as={Link} to="/projects"/>
                                    <Dropdown.Item icon='sign-out alternate' text='Log Out' as={Link} to="/login" onClick={this.props.handleLogout}/>
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