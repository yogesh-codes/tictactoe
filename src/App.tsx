import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/game",
        element: <GamePage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}
