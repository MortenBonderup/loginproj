import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./views/HomePage";
import UserPage from "./views/UserPage";
import AdminPage from "./views/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';
import CreateUser from "./views/CreateUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "user",
                element: <UserPage />,
            },
            {
                path: "admin",
                element: <ProtectedRoute element={<AdminPage />} />,
            },
            {
                path: "opret",
                element: <CreateUser />,
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
