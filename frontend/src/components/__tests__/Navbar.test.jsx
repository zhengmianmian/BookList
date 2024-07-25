import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import { useAuth } from '../Auth';
import '@testing-library/jest-dom';

jest.mock('../Auth');

describe('Navbar', () => {
  beforeEach(() => {
    useAuth.mockReturnValue({
      isAuthenticated: false,
      setToken: jest.fn(),
      user: { email: 'test@example.com' },
    });
  });

  test('renders Booklist link', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('Booklist')).toBeInTheDocument();
  });

  test('renders Others link', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('Others')).toBeInTheDocument();
  });

  test('renders Sign in and Sign up when not authenticated', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  test('renders user email and Sign out when authenticated', () => {
    useAuth.mockReturnValue({
      isAuthenticated: true,
      setToken: jest.fn(),
      user: { email: 'test@example.com' },
    });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  test('calls setToken when Sign out is clicked', () => {
    const mockSetToken = jest.fn();
    useAuth.mockReturnValue({
      isAuthenticated: true,
      setToken: mockSetToken,
      user: { email: 'test@example.com' },
    });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText(/Sign out/i));
    expect(mockSetToken).toHaveBeenCalledWith('');
  });
});
