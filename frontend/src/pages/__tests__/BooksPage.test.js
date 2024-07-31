import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent, waitFor, findByText } from '@testing-library/react';
import '@testing-library/jest-dom'
import MockAdapter from 'axios-mock-adapter';
import { useAuth } from '../../components/Auth';
import BooksPage from '../BooksPage';
import { BOOKS_URL } from '../../api/urls';

// Mocking useAuth
jest.mock('../../components/Auth');

// Mocking axios
const mock = new MockAdapter(axios);

describe('BooksPage', () => {
  beforeEach(() => {
    useAuth.mockReturnValue({
      token: 'test-token',
      user: { _id: 'user-id', email: 'test@example.com' },
    });
  });

  afterEach(() => {
    mock.reset();
  });

  test('renders BooksPage and fetches books', async () => {
    const books = [
      { id: 1, bookName: 'Book 1', price: 10, category: 'Fiction', author: 'Author 1', like: false },
      { id: 2, bookName: 'Book 2', price: 15, category: 'Non-Fiction', author: 'Author 2', like: true },
    ];

    mock.onGet(`${BOOKS_URL}/mine/user-id`).reply(200, books);
    
    render(<BooksPage />);
    //npm test -- BooksPage.test.js
    const text = await screen.findByText("You have 2 books.");
    expect(text).toBeInTheDocument();
    expect(screen.getByText('Name: Book 1')).toBeInTheDocument();
    expect(screen.getByText('Name: Book 2')).toBeInTheDocument();
  });

});
