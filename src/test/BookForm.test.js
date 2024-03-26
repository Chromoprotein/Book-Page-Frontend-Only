import React from 'react';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookForm from '../components/BookForm';
import BookContextProvider from '../contexts/BookContext';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup)

it('should be disabled', () => {
    render(
    <BookContextProvider>
        <Router>
            <BookForm />
        </Router>
    </BookContextProvider>
    ); 
    expect(screen.getByTestId('submit-button')).toBeDisabled()
});

// Mock URL.createObjectURL
beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => 'mocked-url');
});

it('enables the submit button when the form is completely filled out', () => {
    // Render the form
    render(
    <BookContextProvider>
        <Router>
            <BookForm />
        </Router>
    </BookContextProvider>
    ); 

    // Simulate filling in the form

    // File upload
    // Mock a file
    const file = new File(['(⌐□_□)'], 'harrypotter.png', { type: 'image/png' });
    // Click the upload button to trigger the file input
    const uploadButton = screen.getByTestId('upload-button');
    fireEvent.click(uploadButton);
    // Find the file input and simulate file selection
    const fileInput = screen.getByTestId('file-upload');
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Title
    fireEvent.change(screen.getByTestId('title-test'), {
      target: { value: 'Harry Potter and the Chamber of Secrets' },
    });

    // Author
    fireEvent.change(screen.getByTestId('author-test'), {
      target: { value: 'J.K. Rowling' },
    });

    // Year
    // Open the dropdown menu
    const yearButton = screen.getByTestId('year-test-id');
    fireEvent.click(yearButton);
    // Choose an option from the menu
    const yearOptionToSelect = screen.getByRole('option', { name: /2020/i });
    fireEvent.click(yearOptionToSelect);

    // Genre
    // Open the dropdown menu
    const genreButton = screen.getByTestId('genre-test-id');
    fireEvent.click(genreButton);
    // Choose an option from the menu
    const genreOptionToSelect = screen.getByRole('option', { name: /fantasy/i });
    fireEvent.click(genreOptionToSelect);

    // Review
    fireEvent.change(screen.getByTestId('review-test'), {
      target: { value: 'It was just as good as when I read it as a kid.' },
    });

    // Stars
    fireEvent.click(screen.getByTestId('star-test-4'));

    // After all fields have been filled, check if the submit button is enabled
    expect(screen.getByTestId('submit-button')).not.toBeDisabled();
});