import { User } from '@ipb/frontend/src/types/user.types';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userApi = {
  getUsers: () => api.get<User[]>('/users'),
}; 