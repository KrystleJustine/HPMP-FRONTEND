import React from "react";

class Form extends React.Component {
  state = {
      title: "",
      description: 0,
      status: "",
      img: ""
  };

  changeHandler = e => {
      console.log(e.target.value);
     this.setState({
         [e.target.name]: e.target.value
    });
};

// submitHandler = e => {
//         e.preventDefault();
//         this.props.submitHandler(this.state);
//         this.setState({
//                   title: "",
//                   description: "",
//                   status: "",
//                   img: ""
//               });
//         };


render() {
  return (
  <form onSubmit={(e) => this.props.submitHandler(e, this.state)}>
          <input
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
          />

        <input
          type="text"
          placeholder="Description"
          name="description"
          value={this.state.description}
          onChange={this.changeHandler}
        />

<div>
      <h4 className="ui header">New Projects</h4>
      <p>Create a new Project board </p>
      <span>
  Pick Your Project Lead
  <div className="ui inline dropdown">
    <div className="text">
      <img className="ui avatar image" src="/images/avatar/small/jenny.jpg" alt=""/>
      Jenny Hess
    </div>
  </div>
      </span>
  </div>


        <select value={this.state.status} name="status" onChange={this.changeHandler}>
            <option value="toDo">Validate</option>
            <option value="inProgress">Done</option>
            <option value="event">Working On It</option>
            <option value="completed">Waiting For Review</option>
            <option value="cancelled">Stuck!</option>
            <option value="migrated">Migrated</option>
            <option value="important">Research</option>
            <option value="meeting">Production</option>
        </select>

        <input
            type="text"
            placeholder="Photo"
            name="image"
            value={this.state.img}
            onChange={this.changeHandler}
            />

        <button>Create New Lead Card</button>
  </form>
    );
  }
}

export default Form;