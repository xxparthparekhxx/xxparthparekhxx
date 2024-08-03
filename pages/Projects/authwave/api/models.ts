// types.ts

// Common response types
export interface ErrorResponse {
    error: string;
}

// Admin User Types
export interface AdminUser {
    username: string;
    password: string;
}

export interface AdminLoginResponse {
    token: string;
}

// App Types
export interface App {
    name: string;
    client_id: string;
    client_secret: string;
}

export interface AppCreateResponse extends App {
    id: number;
}

// User Types
export interface CustomUser {
    username: string;
    password: string;
    app: number; // app_id
}

export interface UserLoginResponse {
    token: string;
}

export interface User {
    username: string;
    app: string; // app name
}

// Token Types
export interface TokenVerificationResponse {
    username: string;
    app: string;
}
