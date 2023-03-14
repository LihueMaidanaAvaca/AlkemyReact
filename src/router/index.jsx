import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Listado from "../components/Listado";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/listado',
        element: <Listado/>
    }
])