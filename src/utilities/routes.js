import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import LoadQuize from "../components/LoadQuize";
import Root from "../components/Root";
import Statistics from "../components/Statistics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        
        children: [
            { path: '/', element: <Home />, loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), },
            { path: '/home', element: <Home />, loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), },
            {
                path: '/quiz/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <LoadQuize />,
            },
            { path: '/statistics', element: <Statistics />, loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), },
            {path: '/blog', element: <Blog />},
        ]
    }
]);
export default router;
















