import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Root from "../components/Root";
import Statistics from "../components/Statistics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage/>,
        children: [
            { path: '/', element: <Home /> },
            {path: '/statistics', element: <Statistics />},
        ]
    }
]);
export default router;
















