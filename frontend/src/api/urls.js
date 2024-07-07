/**
 * API URLs accessed from various frontend locations
 */

const BASE_URL = 'http://localhost:8080';
const API_BASE_URL = `${BASE_URL}/api`;

export const BOOKS_URL = `${API_BASE_URL}/Books`;
export const USERS_URL = `${API_BASE_URL}/Users`;

export const LOGIN_URL = `${USERS_URL}/login`;
