import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

//function to fetch users from the API
export const fetchUsers = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

//function to add a new user to the API
export const addUser = async (user) => {
  const response = await axios.post(API_BASE_URL, user);
  return response.data;
};

//function to update an existing user in the API
export const updateUser = async (id, user) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, user);
  return response.data;
};

//function to delete a user from the API
export const deleteUser = async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
