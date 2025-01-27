import React, { Component } from "react";

class UserForm extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    website: "",
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState(this.props.currentUser || { id: "", name: "", email: "", website: "" });
    }
  }

  handleChange = (err) => {
    this.setState({ [err.target.name]: err.target.value });
  };

  handleSubmit = (err) => {
    err.preventDefault();
    const { id, name, email, website } = this.state;
    const user = { id, name, email, website };

    if (this.props.currentUser) {
      this.props.whenEditUser(id, user);
    } else {
      this.props.whenAddUser(user);
    }

    this.setState({ id: "", name: "", email: "", website: "" });
  };

  render() {
    const { id, name, email, website } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="id" value={id} onChange={this.handleChange} placeholder="ID" required />
        <input name="name" value={name} onChange={this.handleChange} placeholder="Name" required />
        <input name="email" value={email} onChange={this.handleChange} placeholder="Email" required />
        <input name="website" value={website} onChange={this.handleChange} placeholder="website" required />
        <button type="submit">{this.props.currentUser ? "Update User" : "Add User"}</button>
      </form>
    );
  }
}

export default UserForm;
