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

submitHandler = e => {
        e.preventDefault();
        this.props.submitHandler(this.state);
        this.setState({
                  title: "",
                  description: "",
                  status: "",
                  img: ""
              });
        };

render() {
  return (
  <form onSubmit={this.submitHandler}>
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

        <input
            type="select"
            placeholder="Status"
            name="status"
            value={this.state.status}
            onChange={this.changeHandler}
        />

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