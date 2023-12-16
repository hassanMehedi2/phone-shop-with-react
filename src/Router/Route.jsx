import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorite from "../pages/Favorite/Favorite";
import Login from "../pages/Login/Login";


const MyCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>,
                loader: ()=> fetch("/phones.json"),
            },
            {
                path:"/favorite",
                element: <Favorite></Favorite>
            },
            {
                path:"/login",
                element: <Login></Login>
            }
        ]
    }
])

export default MyCreatedRoute;