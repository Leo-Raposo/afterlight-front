import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'url';

  constructor(private http: HttpClient) { }

  async isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    try {
      const response = await axios.get(`${this.apiUrl}/auth/is-authenticated`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.status === 200;
    } catch (error) {
      console.error('Token validation failed:', error);
      localStorage.removeItem('token');
      return false;
    }
  }

  async login(credentials: { username: string, password: string }): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/api/users/login`, credentials);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error: any) {
      console.error('Login failed:', error.response || error);
      throw error;
    }
  }

  async register(user: { username: string, email: string, password: string }): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/api/users/register`, user);
      return response.data;
    } catch (error: any) {
      console.error('Registration failed:', error.response || error);
      throw error;
    }
  }

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  async getUserProfile(): Promise<{ username: string, email: string }> {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    try {
      const response = await axios.get(`${this.apiUrl}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      throw error;
    }
  }


  async getUsername(): Promise<{ username: string }> {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    try {
      const response = await axios.get(`${this.apiUrl}/api/admin/users/username`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch username:', error);
      throw error;
    }
  }

  getExercises(): Observable<{ exercises: string[] }> {
    const token = localStorage.getItem('token');
    const headers: { [header: string]: string } = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return this.http.get<{ exercises: string[] }>('https://run.mocky.io/v3/85e64450-c836-4ef9-89aa-12462a394d3e', { headers });
  }

  async logout(): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await axios.post(`${this.apiUrl}/auth/logout`, {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }

      localStorage.removeItem('token');
    } catch (error: any) {
      console.error('Logout failed:', error.response || error);
      throw error;
    }
  }
}
