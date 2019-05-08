import React from "react";
import { Segment, Dropdown, TextArea, Form , Select, Label} from 'semantic-ui-react'

class NewProjectForm extends React.Component {

  state = {
      task1: {
          title: "",
          status: ""
      },
      task2: {
          title: "",
          status: ""
      },
      task3: {
          title: "",
          status: ""
      },

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
      console.log(e.target.data.attribute);
      let updatedTask = {...this.state[e.target.name]};
      updatedTask.name = e.target.value;
     this.setState({
         [e.target.name]: updatedTask
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
            {/*Project Manager Lead*/}
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
                            name="task1"
                            data-attribute="name"
                            value={this.state.description}
                            onChange={this.changeHandler}
                            width={4}
                        />
                        <br/>
                        <br/>
                        <Select placeholder="Select Status" options={this.statusOptions} value={this.state.status} onChange={this.changeHandler}/>
                        <br/>
                        <br/>
                        <button type="submit" >Create New PM Lead Card</button>
                        <br/>
                    </Segment>
                </Form.Group>
            </Form>
            {/*UX/UI Lead*/}
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
                        <br/>
                        <div className="wrapper">
                            <div className="button-block">
                                <button type="button">
                                    <i className="mark x"> ,</i>
                                    <i className="mark xx">l </i>
                                </button>
                            </div>
                        </div>
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