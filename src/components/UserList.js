import React, { useState } from 'react';

const UserList = ({ users, whenEdit, whenDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Calculate the current users to display
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button onClick={() => whenEdit(user)}>Edit</button>
                <button onClick={() => whenDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map((number) => (
          <button key={number + 1} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
