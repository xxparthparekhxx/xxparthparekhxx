// api.ts
import {
  AdminLoginResponse,
  App,
  AdminUser,
  AppCreateResponse,
  CustomUser,
  ErrorResponse,
  TokenVerificationResponse,
  User,
  UserLoginResponse,
} from "./models";

const API_URL = "https://api.parthp.in/authservice/"; // Replace with your actual API URL

// Utility function to handle fetch requests
async function apiFetch<T>(url: string, options: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error || "An unknown error occurred");
  }
  return response.json();
}

// Admin User Functions
export async function createAdminUser(adminUser: AdminUser): Promise<void> {
  await apiFetch<void>(`${API_URL}admin/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(adminUser),
  });
}

export async function adminLogin(
  username: string,
  password: string
): Promise<AdminLoginResponse> {
  return apiFetch<AdminLoginResponse>(`${API_URL}admin/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
}

// App Functions
export async function createApp(
  token: string,
  name: string
): Promise<AppCreateResponse> {
  return apiFetch<AppCreateResponse>(`${API_URL}app/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });
}

export async function deleteApp(token: string, appId: number): Promise<void> {
  try {
    await apiFetch<void>(`${API_URL}app/delete/${appId}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch {
    console.log("deleted successfully");
  }
}

export async function listApps(token: string): Promise<App[]> {
  return apiFetch<App[]>(`${API_URL}app/list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function deleteUser(
  clientId: string,
  clientSecret: string,
  userId: number
): Promise<void> {
  try {
    await apiFetch<void>(`${API_URL}user/delete/${userId}/`, {
      method: "DELETE",
      headers: {
        "Client-ID": clientId,
        "Client-Secret": clientSecret,
      },
    });
  } catch {
    console.log("deleted successfully");
  }
}

// User Functions
export async function registerUser(user: CustomUser): Promise<void> {
  await apiFetch<void>(`${API_URL}user/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export async function userLogin(
  username: string,
  password: string,
  appId: number
): Promise<UserLoginResponse> {
  return apiFetch<UserLoginResponse>(`${API_URL}user/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, app_id: appId }),
  });
}

export async function listUsers(token: string, appId: number): Promise<User[]> {
  return apiFetch<User[]>(`${API_URL}app/${appId}/users/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// Token Functions
export async function verifyToken(
  token: string
): Promise<TokenVerificationResponse> {
  return apiFetch<TokenVerificationResponse>(`${API_URL}user/verify-token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
}
