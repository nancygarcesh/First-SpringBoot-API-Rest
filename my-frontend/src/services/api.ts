const BASE_URL = "http://localhost:8080";

export interface User {
    id?: number;
    name: string;
    email: string;
}

async function handleResponse(res: Response) {
    if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "API error");
    }
    return res.json();
}

export async function getUsers(): Promise<User[]> {
    const res = await fetch(`${BASE_URL}/users`);
    return handleResponse(res);
}

export async function createUser(user: User) {
    const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
    return handleResponse(res);
}

export async function updateUser(id: number, user: User) {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
    return handleResponse(res);
}

export async function deleteUser(id: number) {
    const res = await fetch(`${BASE_URL}/users/${id}`, { method: "DELETE" });
    if (!res.ok) {
        throw new Error(`Failed to delete user: ${res.statusText}`);
    }
}
