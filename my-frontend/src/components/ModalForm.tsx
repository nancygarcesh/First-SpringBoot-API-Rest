import { useState, useEffect } from "react";
import { User } from "../services/api";

interface Props {
    user?: User;
    onClose: () => void;
    onSave: (user: User) => void;
}

export default function ModalForm({ user, onClose, onSave }: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        } else {
            setName("");
            setEmail("");
        }
    }, [user]);

    const handleSubmit = () => {
        if (!name.trim() || !email.trim()) {
            setError("Name and Email are required");
            return;
        }
        onSave({ ...user, name, email });
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-96">
                <h2 className="text-xl mb-4 font-semibold">{user ? "Edit User" : "New User"}</h2>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <input
                    className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex justify-end space-x-2 mt-2">
                    <button
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}