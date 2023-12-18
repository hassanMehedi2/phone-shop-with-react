import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorite from "../pages/Favorite/Favorite";
import Login from "../pages/Login/Login";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";


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
            },
            {
                path:"/phone/:id",
                element:<PhoneDetails></PhoneDetails>,
                loader: ()=>fetch("/phones.json")
            }
        ]
    }
])

export default MyCreatedRoute;