import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
    return (
        <div className="dark:bg-gray-900 min-h-screen font-sans">
            <Navbar />
            <Dashboard />
        </div>
    );
}