import React from "react";
import { Segment, Dropdown, TextArea, Form , Select, Label} from 'semantic-ui-react'

class NewProjectForm extends React.Component {

  state = {
      title: "",
      description: "",
      status: "",
      img: "",
      name: "",
      submittedName: "",
      username: "",
      submittedUsername: ""
  };



    changeHandler = e => {
      console.log(e.target.value);
     this.setState({
         [e.target.name]: e.target.value
    });
};


    pmOptions = [
        {
            key: 'Alpha',
            text: 'Alpha',
            value: 'Alpha',
            image: { avatar: true, src: ""},
        },
        {
            key: 'Beta',
            text: 'Beta',
            value: 'Beta',
            image: { avatar: true, src: '' },
        },
        {
            key: 'Gamma',
            text: 'Gamma',
            value: 'Gamma',
            image: { avatar: true, src: '' },
        },
    ];

    uxOptions = [
        {
            key: 'Kappa',
            text: 'Kappa',
            value: 'Kappa',
            image: { avatar: true, src: ""},
        },
        {
            key: 'Tau',
            text: 'Tau',
            value: 'Tau',
            image: { avatar: true, src: '' },
        },
        {
            key: 'Phi',
            text: 'Phi',
            value: 'Phi',
            image: { avatar: true, src: '' },
        },
    ]
statusOptions = [
    {
        key: "validate",
        text: "Validate",
    },
    {
        key: "done",
        text: "Done",
    },
    {
        key: "workingOnIt",
        text: "Working On It",
    }
];


render() {
    console.log("I'm here bitches");
  return (
      <div>
        <h4 className="ui header">Create a new Project board</h4>
          <Segment inline>
              <Label attached="top">Project Name</Label>
              <input
                  type="text"
                  placeholder="Project Name"
                  name="title"
                  value={this.state.title}
                  onChange={this.changeHandler}
              />
          </Segment>


        <div style={{display:'flex', alignContent:'center', textAlign:'center', justifyContent:'space-evenly'}}>
            <Form onSubmit={(e) => this.props.handleNewProjectSubmit(e, this.state)} >
                <Form.Group widths={3}>
                    <Segment inline className='form-segment'>
                        <Label attached="top">Project Manager</Label>
                        <br/><br/>
                        <h3>Select Project Manager</h3>
                        <Dropdown
                            text='Add Project Manager'
                            icon='edit'
                            floating
                            labeled
                            button
                            className='icon'
                        >
                            <Dropdown.Menu>
                                <Dropdown.Header content='Pick a PM' />
                                {this.pmOptions.map(option => (
                                    <Dropdown.Item key={option.value} {...option} />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        <br/>

                        <h3>Project Manager Responsibilities</h3>
                        <TextArea
                            rows={2}
                            placeholder= "Role Responsibilities"
                            name="description"
                            value={this.state.description}
                            onChange={this.changeHandler}
                            width={4}
                        />
                        <br/>
                        <br/>
                        <Select placeholder="Select Status" options={this.statusOptions} value={this.state.status} onChange={this.changeHandler}/>
                        <br/>
                        <button type="submit" >Create New PM Lead Card</button>
                        <br/>
                    </Segment>
                </Form.Group>
            </Form>

            <Form onSubmit={(e) => this.props.handleNewProjectSubmit(e, this.state)} >
                <Form.Group widths={3}>
                    <Segment inline>
                        <Label attached="top">UX/UI Lead</Label>
                        <br/><br/>
                        <h3>Select Project Manager</h3>
                        <Dropdown
                            text='Add Project Manager'
                            icon='edit'
                            floating
                            labeled
                            button
                            className='icon'
                        >
                            <Dropdown.Menu>
                                <Dropdown.Header content='Pick a PM' />
                                {this.pmOptions.map(option => (
                                    <Dropdown.Item key={option.value} {...option} />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        <br/>

                        <h3>Project Manager Responsibilities</h3>
                        <TextArea
                            rows={2}
                            placeholder= "Role Responsibilities"
                            name="description"
                            value={this.state.description}
                            onChange={this.changeHandler}
                            width={4}
                        />
                        <br/>
                        <br/>
                        <Select placeholder="Select Status" options={this.statusOptions} value={this.state.status} onChange={this.changeHandler}/>
                        <br/>
                        <button type="submit" >Create New UX/UI Lead Card</button>
                    </Segment>
                </Form.Group>
            </Form>


            {/*Dev Lead*/}

            <Form onSubmit={(e) => this.props.handleNewProjectSubmit(e, this.state)} >
                <Form.Group widths={3}>
                    <Segment inline>
                        <Label attached="top">UX/UI Lead</Label>
                        <br/><br/>
                        <h3>Select Project Manager</h3>
                        <Dropdown
                            text='Add Project Manager'
                            icon='edit'
                            floating
                            labeled
                            button
                            className='icon'
                        >
                            <Dropdown.Menu>
                                <Dropdown.Header content='Pick a PM' />
                                {this.pmOptions.map(option => (
                                    <Dropdown.Item key={option.value} {...option} />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        <br/>

                        <h3 >Project Manager Responsibilities</h3>
                        <TextArea
                            rows={2}
                            placeholder= "Role Responsibilities"
                            name="description"
                            value={this.state.description}
                            onChange={this.changeHandler}
                            width={4}
                        />
                        <br/>
                        <br/>
                        <Select placeholder="Select Status" options={this.statusOptions} value={this.state.status} onChange={this.changeHandler}/>
                        <br/>
                        <button type="submit" >Create New UX/UI Lead Card</button>
                    </Segment>
                </Form.Group>
            </Form>


        </div>
      </div>
    )
  }
}

export default NewProjectForm;

// {/*<select value={this.state.status} name="status" onChange={this.changeHandler}>*/}
// {/*<option value="to Do">Validate</option>*/}
// {/*<option value="inProgress">Done</option>*/}
// {/*<option value="event">Working On It</option>*/}
// {/*<option value="completed">Waiting For Review</option>*/}
// {/*<option value="cancelled">Stuck!</option>*/}
// {/*<option value="migrated">Migrated</option>*/}
// {/*<option value="important">Research</option>*/}
// {/*<option value="meeting">Production</option>*/}
// {/*</select>*/}