import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Describe the test suite for the User Management Dashboard
describe('User Management Dashboard', () => {
  
  // Test case to check if the dashboard title is rendered
  test('renders dashboard title', () => {
    render(<App />);
    expect(screen.getByText('User Management Dashboard')).toBeInTheDocument();
  });

  // Test case to check if the user form is rendered
  test('renders user form', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Website')).toBeInTheDocument();
  });

  // Test case to check if a new user can be added
  test('adds a new user', async () => {
    render(<App />);
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const websiteInput = screen.getByPlaceholderText('Website');
    const submitButton = screen.getByText('Add User');

    // Simulate user input
    userEvent.type(nameInput, 'John Doe');
    userEvent.type(emailInput, 'john@example.com');
    userEvent.type(websiteInput, 'www.example.com');
    fireEvent.click(submitButton);

    // Wait for the new user to be added and check if it is rendered
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  // Test case to check if an existing user can be edited
  test('edits an existing user', async () => {
    render(<App />);
    const editButton = screen.getAllByText('Edit')[0];
    fireEvent.click(editButton);

    const nameInput = screen.getByPlaceholderText('Name');
    userEvent.clear(nameInput);
    userEvent.type(nameInput, 'Jane Doe');

    const updateButton = screen.getByText('Update User');
    fireEvent.click(updateButton);

    // Wait for the user to be updated and check if the changes are rendered
    await waitFor(() => {
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  // Test case to check if a user can be deleted
  test('deletes a user', async () => {
    render(<App />);
    const deleteButton = screen.getAllByText('Delete')[0];
    const userName = screen.getByText('Jane Doe');

    fireEvent.click(deleteButton);

    // Wait for the user to be deleted and check if it is removed from the DOM
    await waitFor(() => {
      expect(userName).not.toBeInTheDocument();
    });
  });

  // Test case to check form validation for required fields
  test('validates required fields', async () => {
    render(<App />);
    const submitButton = screen.getByText('Add User');

    fireEvent.click(submitButton);

    // Wait for validation messages to be displayed
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Website is required')).toBeInTheDocument();
    });
  });

  // Test case to check if API errors are handled gracefully
  test('handles API errors gracefully', async () => {
    // Mock a failed API call
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('API Error'));

    render(<App />);
    const nameInput = screen.getByPlaceholderText('Name');
    const submitButton = screen.getByText('Add User');

    userEvent.type(nameInput, 'Test User');
    fireEvent.click(submitButton);

    // Wait for the error message to be displayed
    await waitFor(() => {
      expect(screen.getByText('Failed to add user. Please try again.')).toBeInTheDocument();
    });

    // Restore the original fetch implementation
    global.fetch.mockRestore();
  });
});