import React, { Component } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import ErrorBoundary from "../components/ErrorBoundary";
import { fetchUsers, addUser, updateUser, deleteUser } from "../api/api";

class Dashboard extends Component {
  state = {
    users: [],
    currentUser: null, 
    error: null,
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    try {
      const users = await fetchUsers();
      this.setState({ users, error: null });
    } catch (error) {
      this.setState({ error: "Failed to fetch users. Please try again later." });
    }
  };

  functionAddUser = async (user) => {
    try {
      const newUser = await addUser(user);
      this.setState((prevState) => ({
        users: [...prevState.users, newUser],
        error: null,
      }));
    } catch (error) {
      this.setState({ error: "Failed to add user. Please try again." });
    }
  };

  functionEditUser = async (id, updatedUser) => {
    try {
      const user = await updateUser(id, updatedUser);
      this.setState((prevState) => ({
        users: prevState.users.map((u) => (u.id === id ? user : u)),
        currentUser: null,
        error: null,
      }));
    } catch (error) {
      this.setState({ error: "Failed to update user. Please try again." });
    }
  };

  functionDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      this.setState((prevState) => ({
        users: prevState.users.filter((user) => user.id !== id),
        error: null,
      }));
    } catch (error) {
      this.setState({ error: "Failed to delete user. Please try again." });
    }
  };

  render() {
    const { users, currentUser, error } = this.state;

    return (
      <ErrorBoundary>
        {error && <p className="error">{error}</p>}
        <UserForm
          currentUser={currentUser}
          whenAddUser={this.functionAddUser}
          whenEditUser={this.functionEditUser}
        />
        <UserList
          users={users}
          whenEdit={(user) => this.setState({ currentUser: user })}
          whenDelete={this.functionDeleteUser}
        />
      </ErrorBoundary>
    );
  }
}

export default Dashboard;
