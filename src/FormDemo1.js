import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { userName: "" };
  onChangeHandler = (e) => {
    this.setState({ userName: e.target.value });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    alert(this.state.userName);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onChangeHandler}>
          <h3>User Name</h3>
          <input onChange={this.onChangeHandler} typye="text"></input>
          <h3>User Name is {this.state.userName}</h3>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
