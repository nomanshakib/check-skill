import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Root from "../components/Root";
import Statistics from "../components/Statistics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { path: '/', element: <Home /> },
            {path: '/statistics', element: <Statistics />},
        ]
    }
]);
export default router;
















