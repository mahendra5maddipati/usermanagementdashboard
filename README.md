User Management Dashboard
    -A web application built with React that allows users to manage user data. The application supports functionalities like viewing, adding, editing, and deleting users while providing error handling and a clean, responsive design with integrated API

Features
    -User Management
        -Fetch and display a list of users.
        -Add new users with ID, Name, Email, Department details
        -Edit existing user's details
        -Delete users from the list
    -Error Handling
        -Display user-friendly error messages when API calls fail
    -Dynamic Form Handling
        -Populate the form for editing users
        -Clear the form after successful submission
    -API Integration
        -Uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API to simulate backend operations for CRUD (Create, Read, Update, Delete) actions

Technologies Used
    -Frontend: React.js
    -Styling: CSS(Responsive Design)
    -API Calls: Axios
    -Error Boundry: React ErrorBoundry Component

Folder Structure
    -src/
        -components/
            -UserList.js       #Component to display user list
            -UserForm.js       #Component to handle add/edit user functionality
            -ErrorBoundry.js   #Component to handle errors
        -Pages/
            -Dashboard.js      #Main page that connects to all child components
        -api/
            -api.js            #Function to interact with JSONPlaceholder API
        -styles/
            -App.js            #Global styles
        -App.js                #Main file
        -index.js              #Entry point of the app