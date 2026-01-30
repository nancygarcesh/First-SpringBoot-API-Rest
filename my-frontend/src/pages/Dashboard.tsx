import { useEffect, useState } from "react";
import Table from "../components/Table";
import ModalForm from "../components/ModalForm";
import { getUsers, createUser, updateUser, deleteUser, User } from "../services/api";

export default function Dashboard() {
    const [users, setUsers] = useState<User[]>([]);
    const [editingUser, setEditingUser] = useState<User | undefined>(undefined);
    const [modalOpen, setModalOpen] = useState(false);

    const loadUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (err) {
            console.error("Failed to load users:", err);
            setUsers([]);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleSave = async (user: User) => {
        try {
            if (user.id) await updateUser(user.id, user);
            else await createUser(user);
            loadUsers();
        } catch (err) {
            console.error("Failed to save user:", err);
            alert("Error saving user. Check console for details.");
        }
    };

    const handleDelete = async (id?: number) => {
        if (!id) return;
        if (!window.confirm("Are you sure you want to delete this user?")) return;
        try {
            await deleteUser(id);
            loadUsers();
        } catch (err) {
            console.error("Failed to delete user:", err);
            alert("Error deleting user. Check console for details.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                User Management
            </h1>
            <button
                className="mb-4 px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500 transition"
                onClick={() => { setEditingUser(undefined); setModalOpen(true); }}
            >
                + New User
            </button>
            <Table users={users} onEdit={(u) => { setEditingUser(u); setModalOpen(true); }} onDelete={handleDelete} />
            {modalOpen && (
                <ModalForm user={editingUser} onClose={() => setModalOpen(false)} onSave={handleSave} />
            )}
        </div>
    );
}