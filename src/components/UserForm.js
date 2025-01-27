import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    id: '',
    name: '',
    email: '',
    website: '',
    errors: {},
  };

  componentDidUpdate(prevProps) {
    if (this.props.currentUser && this.props.currentUser !== prevProps.currentUser) {
      this.setState({ ...this.props.currentUser });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, email, website } = this.state;
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!website) errors.website = 'Website is required';
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const { id, name, email, website } = this.state;
    const user = { id, name, email, website };

    if (this.props.currentUser) {
      this.props.whenEditUser(id, user);
    } else {
      this.props.whenAddUser(user);
    }

    this.setState({ id: '', name: '', email: '', website: '', errors: {} });
  };

  render() {
    const { id, name, email, website, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="id" value={id} onChange={this.handleChange} placeholder="ID" required />
        <input name="name" value={name} onChange={this.handleChange} placeholder="Name" required />
        {errors.name && <p className="error">{errors.name}</p>}
        <input name="email" value={email} onChange={this.handleChange} placeholder="Email" required />
        {errors.email && <p className="error">{errors.email}</p>}
        <input name="website" value={website} onChange={this.handleChange} placeholder="Website" required />
        {errors.website && <p className="error">{errors.website}</p>}
        <button type="submit">{this.props.currentUser ? 'Update User' : 'Add User'}</button>
      </form>
    );
  }
}

export default UserForm;
