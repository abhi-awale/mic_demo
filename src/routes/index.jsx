import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";


export const router = createBrowserRouter([{
    path: '/',
    element : <App />,
    children : [
       {
        element : <MainLayout />,
        children : [
            {
                index:true,
                element: <HomePage />
            },
            {
                path: 'categories',
                element : <h1>Categories Page</h1>
            }
        ]
       },
       {
            path: '*',
            element : <NotFoundPage />
       }
    ]
}])