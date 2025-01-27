# User Management Dashboard

This project is a User Management Dashboard built with React. It allows you to manage users by adding, editing, and deleting them. The app uses a mock backend API for demonstration purposes.

## Features

- **Add User**: Add a new user to the list.
- **Edit User**: Edit the details of an existing user.
- **Delete User**: Remove a user from the list.
- **Pagination**: Navigate through the user list with pagination.
- **Client-side Validation**: Validate user input before submitting the form.
- **Responsive Design**: The interface is responsive and works well on different screen sizes.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/usermanagementdata.git
   ```

2. Install Dependencies
   Make sure you have Node.js installed. Then, run:

   ```sh
   npm install
   ```

3. Start the Development Server
   Run the following command to start the app:

   ```sh
   npm start
   ```

   The app will be available at http://localhost:3000.

## Usage

1. Viewing Users
   The app fetches and displays a list of users from the API upon loading.
   Users are displayed in a table format with columns for ID, Name, Email, Department, and Actions.

2. Adding a User
   Click on the "Add User" button to open the form.
   Fill in the details (ID, Name, Email, Department) and click "Submit."
   The user will be added to the list (simulated using the API).

3. Editing a User
   Click the "Edit" button next to a user.
   The form will be pre-filled with the user's current details.
   Modify the details and click "Update User" to save the changes.

4. Deleting a User
   Click the "Delete" button next to a user to remove them from the list.

## API Endpoints

This app uses the JSONPlaceholder API as a mock backend. The following endpoints are utilized:

- GET /users: Fetch a list of users.
- POST /users: Add a new user.
- PUT /users/{id}: Update an existing user's details.
- DELETE /users/{id}: Delete a user.

## Error Handling

The app uses try-catch blocks to handle API call failures gracefully.
Errors are displayed to users with a friendly message and no disruption to the app's functionality.

## Customizations

You can easily extend the app with the following features:

- Infinite Scrolling: Replace pagination with infinite scrolling to load more users dynamically as the user scrolls down.
- Authentication: Add login functionality to restrict access.
- Responsive Design Enhancements: Ensure the app is fully optimized for mobile devices.
- Backend Integration: Replace the mock JSONPlaceholder API with a real backend.

## Screenshots

1. User List

2. Add User Form

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## Contact

For any questions or support, feel free to reach out:

- Email: mahendra5maddipati@gmail.com
- GitHub: mahendra5maddipati