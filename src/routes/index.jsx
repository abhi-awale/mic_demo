import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductListPage from "../pages/ProductListPage";


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
                path: 'products',
                element : <ProductListPage />
            },
            {
                path: "/products/:id",
                element: <ProductDetailsPage />,
            },
        ]
       },
       {
            path: '*',
            element : <NotFoundPage />
       }
    ]
}])