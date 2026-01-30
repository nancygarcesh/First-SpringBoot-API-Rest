import { User } from "../services/api";

interface Props {
    users: User[];
    onEdit: (user: User) => void;
    onDelete: (id?: number) => void;
}

export default function Table({ users, onEdit, onDelete }: Props) {
    if (!Array.isArray(users)) return null;

    return (
        <div className="overflow-x-auto shadow-lg sm:rounded-lg bg-white dark:bg-gray-800 p-2">
            <table className="min-w-full text-left text-gray-800 dark:text-gray-100">
                <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 ? (
                    users.map((user) => (
                        <tr key={user.id} className="border-b border-gray-300 dark:border-gray-600">
                            <td className="px-4 py-2">{user.id}</td>
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2 space-x-2">
                                <button
                                    className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-500 transition"
                                    onClick={() => onEdit(user)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500 transition"
                                    onClick={() => onDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4} className="text-center py-4">
                            No users found
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}